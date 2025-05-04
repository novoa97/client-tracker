"use server";

import { ActionError } from "@/errors/actions";
import { DeviceType } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";
import { ActionResponse } from "@/types/action-response";

export type DeviceTypeWithInUse = DeviceType & { inUse: boolean };

interface AddDeviceTypeData {
    name: string
    icon: string
}

export async function getDevicesType(): Promise<DeviceTypeWithInUse[]> {
    const types = await prisma.deviceType.findMany({
        include: {
            _count: {
                select: {
                    devices: true,
                },
            },
        },
        orderBy: {
            name: "asc",
        },
    });
    return types.map((type) => ({
        ...type,
        inUse: type._count.devices > 0,
    }));
}

export async function addDeviceType(data: AddDeviceTypeData): Promise<ActionResponse> {
    try {
        const key = slugify(data.name)
        const type = await prisma.deviceType.findFirst({ where: { key } })
        if (!type) {
            await prisma.deviceType.create({
                data: {
                    key: key,
                    name: data.name,
                    icon: data.icon
                }
            })
            return { ok: true }
        }
        else {
            throw new ActionError("Device type already exists")
        }
    }
    catch (error) {
        if (error instanceof ActionError) return error.toResponse()
        else throw error
    }
}

export async function editDeviceType(key: string, data: { name: string, icon: string }): Promise<ActionResponse> {
    try {
        const newKey = slugify(data.name)

        if (newKey !== key) {
            const type = await prisma.deviceType.findFirst({ where: { key: newKey } })
            if (type) throw new ActionError("Device type already exists")
            // Create new type
            await prisma.deviceType.create({
                data: {
                    key: newKey,
                    name: data.name,
                    icon: data.icon
                }
            })
            // Update all devices with the old key to the new key
            await prisma.device.updateMany({
                where: { typeKey: key },
                data: { typeKey: newKey }
            })
            // Delete the old type
            await prisma.deviceType.delete({ where: { key: key } })
        }
        else {
            await prisma.deviceType.update({
                where: { key: key },
                data: {
                    icon: data.icon
                }
            })
        }
        return { ok: true }
    }
    catch (error) {
        if (error instanceof ActionError) return error.toResponse()
        else throw error
    }
}

export async function deleteDeviceType(key: string): Promise<void> {
    await prisma.deviceType.delete({ where: { key: key } })
}