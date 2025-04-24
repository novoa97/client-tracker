"use server";
import { ActionError } from "@/errors/actions";
import { prisma } from "@/lib/prisma"; // donde tengas Prisma configurado
import { ActionResponse } from "@/types/action-response";

type AddLicenseInput = {
    id: string
    type: string
    clientId: string
    subLicenses?: { id: string, type: string }[]
};

export async function addLicense(data: AddLicenseInput): Promise<ActionResponse> {
    try {
        // Check if the license already exists
        const existingLicense = await prisma.license.findUnique({
            where: {
                id: data.id
            }
        });

        if (existingLicense) throw new ActionError("License already exists");

        // Check if sub licenses already exist
        const existingSubLicenses = await prisma.license.findMany({
            where: {
                id: { in: data.subLicenses?.map(subLicense => subLicense.id) }
            }
        });

        if (existingSubLicenses.length > 0) throw new ActionError("One or more sub licenses already exist");

        // Create the license
        await prisma.license.create({
            data: {
                id: data.id,
                clientId: data.clientId,
                typeKey: data.type
            },
        });

        if (data.subLicenses) {
            for (const license of data.subLicenses) {
                await prisma.license.create({
                    data: {
                        id: license.id,
                        clientId: data.clientId,
                        typeKey: license.type,
                        parentId: data.id
                    },
                });
            }
        }

        return { ok: true };
    }
    catch (error) {
        if (error instanceof ActionError) return error.toResponse();
        throw error;
    }
}