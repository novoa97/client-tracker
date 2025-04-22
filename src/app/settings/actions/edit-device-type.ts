"use server";

import { prisma } from "@/lib/prisma";



export async function editDeviceType(key: string, data: { name: string, icon: string }) {
    await prisma.deviceType.update({
        where: { key: key },
        data: {
            name: data.name,
            icon: data.icon
        }
    })
}