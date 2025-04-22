"use server";
import { prisma } from "@/lib/prisma"

interface AddDeviceTypeData {
    name: string
    icon: string
}


export async function addDeviceType(data: AddDeviceTypeData): Promise<void> {
    await prisma.deviceType.create({
        data: {
            key: slugify(data.name),
            name: data.name,
            icon: data.icon
        }
    })
}

function slugify(text: string) {
    return text.toLowerCase().replace(/\s+/g, '-');
}