"use server";
import { ActionError } from "@/errors/actions";
import { prisma } from "@/lib/prisma"; // donde tengas Prisma configurado
import { slugify } from "@/lib/utils";
import { ActionResponse } from "@/types/action-response";

type AddLicenseTypeInput = {
    name: string
};

export async function addLicenseType(name: string): Promise<ActionResponse> {
    try {
        const key = slugify(name);

        const existingLicenseType = await prisma.licenseType.findUnique({
            where: { key },
        });

        if (existingLicenseType) throw new ActionError("License type already exists");

        const licenseType = await prisma.licenseType.create({
            data: {
                key,
                name,
            },
        });

        return { ok: true };

    }
    catch (error) {
        if (error instanceof ActionError) return error.toResponse();
        throw new ActionError("Failed to add license type");
    }

}