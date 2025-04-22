"use server";
import { prisma } from "@/lib/prisma";

export type AddDeviceData = {
    name: string;
    ip: string;
    type: string;
    anyDesk: string;
    serialNumber: string;
};


export async function addDevice(clientId: string, data: AddDeviceData): Promise<void> {
    await prisma.device.create({
        data: {
            name: data.name,
            clientId: clientId,
            typeKey: data.type,
            ip: data.ip ?? null,
            anyDesk: data.anyDesk ?? null,
            serialNumber: data.serialNumber ?? null
        },
    });
}