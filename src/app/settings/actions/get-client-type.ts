import { ClientType } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

export type ClientTypeWithInUse = ClientType & { inUse: boolean };


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