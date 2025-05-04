"use server";
import { prisma } from "@/lib/prisma";

export type DeviceDataAction = {
    name: string;
    type: string;
    ip?: string;
    anyDesk?: string;
    serialNumber?: string;
};


export async function addDevice(clientId: string, data: DeviceDataAction): Promise<void> {
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

export async function editDevice(id: string, data: DeviceDataAction): Promise<void> {
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

export async function deleteDevice(id: string): Promise<void> {
    await prisma.device.delete({
        where: {
            id: id,
        },
    })
}
