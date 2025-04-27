"use server";

import { prisma } from "@/lib/prisma";

export async function editLicenseType(key: string, name: string) {
    const licenseType = await prisma.licenseType.update({
        where: { key },
        data: { name },
    });
}
