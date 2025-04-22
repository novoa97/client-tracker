"use server";
import { Client } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";


export async function saveNotes(client: Client, notes: string): Promise<void> {
    await prisma.client.update({
        where: { id: client.id },
        data: { notes: notes },
    });
}