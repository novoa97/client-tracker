"use server";

import { Incidence } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";


export interface IncidenceData {
    title: string;
    description?: string;
    date: Date;
}


export async function addIncidence(clientId: string, incidence: IncidenceData): Promise<Incidence> {
    const newIncidence = await prisma.incidence.create({
        data: {
            ...incidence,
            clientId: clientId,
        },
    });
    return newIncidence;
}


export async function updateIncidence(id: string, data: IncidenceData): Promise<Incidence> {
    const updatedIncidence = await prisma.incidence.update({
        where: { id },
        data,
    });
    return updatedIncidence;
}

export async function closeIncidence(id: string): Promise<Incidence> {
    const closedIncidence = await prisma.incidence.update({
        where: { id: id },
        data: { closed: true },
    });
    return closedIncidence;
}


export async function deleteIncidence(id: string): Promise<Incidence> {
    const deletedIncidence = await prisma.incidence.delete({
        where: { id: id },
    });
    return deletedIncidence;
}