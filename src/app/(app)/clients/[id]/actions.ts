"use server";
import { Client } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";


export type EditClientData = {
    name: string;
    legalName: string;
    taxId: string;
    address: string;
    latitude: number;
    longitude: number;
    city: string;
    type: string;
}


export async function editClient(id: string, data: EditClientData) {
    await prisma.client.update({
        where: { id },
        data: {
            name: data.name,
            legalName: data.legalName,
            taxId: data.taxId,
            address: data.address,
            latitude: data.latitude,
            longitude: data.longitude,
            city: data.city,
            typeKey: data.type,
        },
    });
}


export async function saveNotes(client: Client, notes: string): Promise<void> {
    await prisma.client.update({
        where: { id: client.id },
        data: { notes: notes },
    });
}