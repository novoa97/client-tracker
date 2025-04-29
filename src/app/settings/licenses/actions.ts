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

        const licenseType = await prisma.licenseType.create({
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
    const licenseType = await prisma.licenseType.update({
        where: { key },
        data: { name },
    });
}

export async function deleteLicenseType(key: string) {
    await prisma.licenseType.delete({ where: { key: key } })
}

