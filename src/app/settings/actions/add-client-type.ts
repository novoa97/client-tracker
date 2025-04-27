"use server";

import { ActionError } from "@/errors/actions";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";
import { ActionResponse } from "@/types/action-response";


export interface CreateClientTypeData {
    name: string;
    color: string;
    icon: string;
}



export async function addClientType(data: CreateClientTypeData): Promise<ActionResponse> {
    try {
        const key = slugify(data.name);

        const existingClientType = await prisma.clientType.findUnique({
            where: { key },
        });
        if (existingClientType) throw new ActionError("Client type already exists");

        const { name, color, icon } = data;

        await prisma.clientType.create({
            data: {
                key: slugify(name),
                name,
                color,
                icon,
            },
        });

        return { ok: true };
    }
    catch (error) {
        if (error instanceof ActionError) return error.toResponse();
        throw error;
    }

}   