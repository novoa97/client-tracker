"use server";

import { prisma } from "@/lib/prisma";


export type EditClientData = {
    name: string;
    legalName: string;
    taxId: string;
    address: string;
    latitude: number;
    longitude: number;
    city: string;
}


export async function editClient(id: string, data: EditClientData) {
    await prisma.client.update({
        where: { id },
        data: data,
    });
}