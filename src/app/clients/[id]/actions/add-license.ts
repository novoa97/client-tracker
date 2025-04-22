"use server";
import { prisma } from "@/lib/prisma"; // donde tengas Prisma configurado

type AddLicenseInput = {
    id: string
    type: string
    clientId: string
    subLicenses?: { id: string, type: string }[]
};

export async function addLicense(data: AddLicenseInput) {

    await prisma.license.create({
        data: {
            id: data.id,
            clientId: data.clientId,
            typeKey: data.type
        },
    });

    if (data.subLicenses) {
        for (const license of data.subLicenses) {
            await prisma.license.create({
                data: {
                    id: license.id,
                    clientId: data.clientId,
                    typeKey: license.type,
                    parentId: data.id
                },
            });
        }
    }
}


function slugify(text: string) {
    return text.toLowerCase().replace(/\s+/g, '-');
}