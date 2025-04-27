"use server";

import { prisma } from "@/lib/prisma";

export async function deleteClientType(id: string) {
    await prisma.clientType.delete({ where: { key: id } });
}

