"use server";
import { prisma } from "@/lib/prisma";
import { ActionError } from "@/errors/actions";
import { ActionResponse } from "@/types/action-response";
import { IncidentStatus } from "@/generated/prisma";

type AddIncidentInput = {
  title: string;
  description?: string;
  date: Date;
};

type EditIncidentInput = {
  title: string;
  description?: string;
  date: Date;
};

export async function addIncident(
  clientId: string,
  data: AddIncidentInput
): Promise<ActionResponse> {
  try {
    await prisma.incident.create({
      data: {
        clientId: clientId,
        title: data.title,
        description: data.description || null,
        date: data.date,
      },
    });

    return { ok: true };
  } catch (error) {
    if (error instanceof ActionError) return error.toResponse();
    throw error;
  }
}

export async function editIncident(
  incidentId: string,
  data: EditIncidentInput
): Promise<ActionResponse> {
  try {
    await prisma.incident.update({
      where: { id: incidentId },
      data: {
        title: data.title,
        description: data.description || null,
        date: data.date,
      },
    });

    return { ok: true };
  } catch (error) {
    if (error instanceof ActionError) return error.toResponse();
    throw error;
  }
}
export async function completeIncident(
  incidentId: string
): Promise<ActionResponse> {
  try {
    await prisma.incident.update({
      where: { id: incidentId },
      data: { status: IncidentStatus.RESOLVED, resolvedAt: new Date() },
    });

    return { ok: true };
  } catch (error) {
    if (error instanceof ActionError) return error.toResponse();
    throw error;
  }
}

export async function deleteIncident(
  incidentId: string
): Promise<ActionResponse> {
  try {
    await prisma.incident.delete({
      where: { id: incidentId },
    });

    return { ok: true };
  } catch (error) {
    if (error instanceof ActionError) return error.toResponse();
    throw error;
  }
}
