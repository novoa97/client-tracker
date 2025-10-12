"use server";
import { prisma } from "@/lib/prisma";
import { ActionError } from "@/errors/actions";
import { ActionResponse } from "@/types/action-response";

type AddIncidentInput = {
  title: string;
  description?: string;
};

export async function addIncident(
  clientId: string,
  data: AddIncidentInput
): Promise<ActionResponse> {
  try {
    const incident = await prisma.incident.create({
      data: {
        clientId: clientId,
        title: data.title,
        description: data.description || null,
      },
    });

    return { ok: true };
  } catch (error) {
    if (error instanceof ActionError) return error.toResponse();
    throw error;
  }
}
