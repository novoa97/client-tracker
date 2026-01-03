import { prisma } from "@/lib/prisma";


export async function deleteFile(id: string) {

    const response = await fetch(`/files/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Failed to delete file");
    }

    return response.json();
}
