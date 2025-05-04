"use server";

import { ActionError } from "@/errors/actions";
import { LicenseType } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";
import { ActionResponse } from "@/types/action-response";

export type LicenseWithInUse = LicenseType & { inUse: boolean };

export async function getLicensesType(): Promise<LicenseWithInUse[]> {
    const types = await prisma.licenseType.findMany({
        include: {
            _count: {
                select: {
                    licenses: true,
                },
            },
        },
        orderBy: {
            name: "asc",
        },
    });
    return types.map((type) => ({
        ...type,
        inUse: type._count.licenses > 0,
    }));
}

export async function addLicenseType(name: string): Promise<ActionResponse> {
    try {
        const key = slugify(name);

        const existingLicenseType = await prisma.licenseType.findUnique({
            where: { key },
        });

        if (existingLicenseType) throw new ActionError("License type already exists");

        await prisma.licenseType.create({
            data: {
                key,
                name,
            },
        });

        return { ok: true };

    }
    catch (error) {
        if (error instanceof ActionError) return error.toResponse();
        throw new ActionError("Failed to add license type");
    }

}

export async function editLicenseType(key: string, name: string) {
    const newKey = slugify(name)
    if (newKey !== key) {
        const type = await prisma.licenseType.findFirst({ where: { key: newKey } })
        if (type) throw new ActionError("License type already exists")

        // Create new type
        await prisma.licenseType.create({
            data: {
                key: newKey,
                name,
            },
        });

        // Update all licenses with the old key to the new key
        await prisma.license.updateMany({
            where: { typeKey: key },
            data: { typeKey: newKey }
        })

        // Delete the old type
        await prisma.licenseType.delete({ where: { key: key } })

    }
    return { ok: true }
}

export async function deleteLicenseType(key: string) {
    await prisma.licenseType.delete({ where: { key: key } })
}

