"use server";

import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";
import { ActionResponse } from "@/types/action-response";


export interface CreateClientTypeData {
    name: string;
    color: string;
    icon: string;
}



export async function editClientType(key: string, data: CreateClientTypeData): Promise<ActionResponse> {
    const { name, color, icon } = data;

    await prisma.clientType.update({
        where: { key },
        data: {
            name,
            color,
            icon,
        },
    });

    return { ok: true };
}   