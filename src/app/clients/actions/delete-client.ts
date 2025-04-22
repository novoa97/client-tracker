"use server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma"; // donde tengas Prisma configurado


export async function deleteClient(id: string) {
    await prisma.client.delete({ where: { id: id } });
}