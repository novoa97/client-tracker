"use server";
import { prisma } from "@/lib/prisma"; // donde tengas Prisma configurado



export async function deleteLicense(id: string) {

    await prisma.license.delete({
        where: { id }
    });
}
