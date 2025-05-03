"use server";
import { prisma } from "@/lib/prisma"


export async function deleteClient(id: string) {
    await prisma.client.delete({ where: { id: id } });
}