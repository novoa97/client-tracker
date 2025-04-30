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

export async function editDeviceType(key: string, data: { name: string, icon: string }) {
    await prisma.deviceType.update({
        where: { key: key },
        data: {
            name: data.name,
            icon: data.icon
        }
    })
}

export async function deleteDeviceType(key: string): Promise<void> {
    await prisma.deviceType.delete({ where: { key: key } })
}