import { License, LicenseType } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

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