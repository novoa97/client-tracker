"use server";

import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";
import { ActionResponse } from "@/types/action-response";


export interface CreateClientTypeData {
    name: string;
    color: string;
    icon: string;
}



export async function addClientType(data: CreateClientTypeData): Promise<ActionResponse> {
    const { name, color, icon } = data;

    const clientType = await prisma.clientType.create({
        data: {
            key: slugify(name),
            name,
            color,
            icon,
        },
    });

    return { ok: true };
}   