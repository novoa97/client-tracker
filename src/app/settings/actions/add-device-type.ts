"use server";
import { ActionError } from "@/errors/actions";
import { prisma } from "@/lib/prisma"
import { slugify } from "@/lib/utils";
import { ActionResponse } from "@/types/action-response";

interface AddDeviceTypeData {
    name: string
    icon: string
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
