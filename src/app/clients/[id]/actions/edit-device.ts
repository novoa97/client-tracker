"use server";

import { prisma } from "@/lib/prisma";



export async function editDevice(id: string, data: any): Promise<void> {
    console.log(id, data);
    await prisma.device.update({
        where: {
            id: id,
        },
        data: {
            serialNumber: data.serialNumber,
            typeKey: data.type,
            name: data.name,
            anyDesk: data.anyDesk,
            ip: data.ip
        }
    })
}
