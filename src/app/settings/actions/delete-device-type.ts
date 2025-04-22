"use server";

import { prisma } from "@/lib/prisma";


export async function deleteDeviceType(key: string): Promise<void> {
    await prisma.deviceType.delete({ where: { key: key } })
}