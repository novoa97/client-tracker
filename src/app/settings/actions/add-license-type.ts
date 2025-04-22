"use server";
import { prisma } from "@/lib/prisma"; // donde tengas Prisma configurado

type AddLicenseTypeInput = {
    name: string
};

export async function addLicenseType(name: string) {
    await prisma.licenseType.create({
        data: {
            key: slugify(name),
            name: name,
        },
    });

}


function slugify(text: string) {
    return text.toLowerCase().replace(/\s+/g, '-');
}