"use server";
import { prisma } from "@/lib/prisma";


export async function deleteDevice(id: string): Promise<void> {
    await prisma.device.delete({
        where: {
            id: id,
        },
    })
}