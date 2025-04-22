"use server";
import { prisma } from "@/lib/prisma"; // donde tengas Prisma configurado

type AddLicenseTypeInput = {
    name: string
};

export async function deleteLicenseType(key: string) {

    await prisma.licenseType.delete({
        where: {
            key: key,
        },
    });
}
