"use server";
import { prisma } from "@/lib/prisma";


export async function getClientType() {
    const clientType = await prisma.clientType.findMany();
    return clientType;
}