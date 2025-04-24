"use server";
import { prisma } from "@/lib/prisma"; // donde tengas Prisma configurado



export async function deleteLicense(id: string) {
    // Delete all sub licenses
    await prisma.license.deleteMany({
        where: {
            parentId: id
        }
    });
    // Delete the license
    await prisma.license.delete({
        where: { id }
    });
}
