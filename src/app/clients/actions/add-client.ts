"use server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma"; // donde tengas Prisma configurado

type AddClientInput = {
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    taxId: string
    legalName: string
    city: string;
    type: string;
};

export async function addClient(input: AddClientInput) {

    await prisma.client.create({
        data: {
            name: input.name,
            address: input.address,
            latitude: input.latitude,
            longitude: input.longitude,
            taxId: input.taxId,
            legalName: input.legalName,
            city: input.city,
            typeKey: input.type,
        },
    });

}
