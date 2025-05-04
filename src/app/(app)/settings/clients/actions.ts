"use server";

import { ActionError } from "@/errors/actions";
import { ClientType } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";
import { ActionResponse } from "@/types/action-response";

export type ClientTypeWithInUse = ClientType & { inUse: boolean };

export interface ClientTypeData {
    name: string;
    color: string;
    icon: string;
}

export async function getClientTypes(): Promise<ClientTypeWithInUse[]> {
    const types = await prisma.clientType.findMany({
        include: {
            _count: {
                select: {
                    clients: true,
                },
            },
        },
        orderBy: {
            name: "asc",
        },
    });
    return types.map((type) => ({
        ...type,
        inUse: type._count.clients > 0,
    }));
}

export async function addClientType(data: ClientTypeData): Promise<ActionResponse> {
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

export async function editClientType(key: string, data: ClientTypeData): Promise<ActionResponse> {
    const { name, color, icon } = data;

    const newKey = slugify(data.name)

    if (newKey !== key) {
        const type = await prisma.clientType.findFirst({ where: { key: newKey } })
        if (type) throw new ActionError("Client type already exists")

        // Create new type
        await prisma.clientType.create({
            data: {
                key: newKey,
                name,
                color,
                icon,
            },
        });

        // Update all clients with the old key to the new key
        await prisma.client.updateMany({
            where: { typeKey: key },
            data: { typeKey: newKey }
        })

        // Delete the old type
        await prisma.clientType.delete({ where: { key: key } })

    }
    else {
        await prisma.clientType.update({
            where: { key },
            data: {
                color,
                icon,
            },
        });

    }
    return { ok: true };

}

export async function deleteClientType(id: string) {
    await prisma.clientType.delete({ where: { key: id } });
}

