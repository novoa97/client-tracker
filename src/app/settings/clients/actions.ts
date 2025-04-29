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

export async function deleteClientType(id: string) {
    await prisma.clientType.delete({ where: { key: id } });
}

