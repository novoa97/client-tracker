"use server";
import { ActionError } from "@/errors/actions";
import { prisma } from "@/lib/prisma"; // donde tengas Prisma configurado
import { ActionResponse } from "@/types/action-response";


type EditLicense = {
    id: string
    type: string
    subLicenses: { id: string, type: string }[]
};

export async function editLicense(data: EditLicense): Promise<ActionResponse> {
    console.log(data);
    try {
        // Check if the license exists
        const license = await prisma.license.findUnique({
            where: { id: data.id },
            include: {
                client: true,
                subLicenses: true
            }
        });
        if (!license) throw new ActionError("License not found");

        if (data.subLicenses.length > 0) {


            const oldSubLicenses = await prisma.license.findMany({
                where: {
                    parentId: data.id
                }
            });

            const existingIds = oldSubLicenses.map(l => l.id)
            const inputIds = data.subLicenses.map(l => l.id).filter(id => id != null)

            const toCreate = data.subLicenses.filter(l => !existingIds.includes(l.id))
            const toUpdate = data.subLicenses.filter(l => existingIds.includes(l.id))
            const toDelete = oldSubLicenses.filter(l => !inputIds.includes(l.id))


            await deleteSubLicenses(toDelete.map(l => l.id))

            await createSubLicenses(data.id, license.client.id, toCreate)

            await updateSubLicenses(toUpdate)
        }
        else {
            await deleteSubLicenses(license.subLicenses.map(l => l.id))
        }

        // Edit the license
        await prisma.license.update({
            where: { id: data.id },
            data: { typeKey: data.type }
        });

        return { ok: true }
    }
    catch (error) {
        if (error instanceof ActionError) return error.toResponse()
        throw error
    }
}

async function deleteSubLicenses(ids: string[]) {
    await prisma.license.deleteMany({
        where: {
            id: { in: ids }
        }
    });
}

async function createSubLicenses(parentId: string, clientId: string, licenses: { id: string, type: string }[]) {
    await prisma.license.createMany({
        data: licenses.map(l => ({ id: l.id, clientId: clientId, parentId: parentId, typeKey: l.type }))
    });
}


async function updateSubLicenses(licenses: { id: string, type: string }[]) {
    for (const license of licenses) {
        await prisma.license.update({
            where: { id: license.id },
            data: { typeKey: license.type }
        });
    }
}
