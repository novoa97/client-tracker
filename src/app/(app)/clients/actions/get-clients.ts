"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma";
import { ClientWithTypeAndCount } from "@/app/types";

interface GetClientsParams {
    page: number;
    pageSize: number;
    search?: string;
    type?: string;
    city?: string;
    order?: string;
    activeIncidents?: boolean;
}

interface GetClientsResponse {
    clients: ClientWithTypeAndCount[];
    hasNextPage: boolean;
    total: number;
}

const getOrder = (order: string) => {
    const dir = order.startsWith("-") ? "desc" : "asc";
    const field = order.startsWith("-") ? order.substring(1) : order;

    // Map frontend field names to database fields
    const fieldMap = {
        name: { name: dir },
        type: { type: { name: dir } },
        licenses: { licenses: { _count: dir } },
        devices: { devices: { _count: dir } },
        city: { city: dir },
        createdAt: { createdAt: dir },
    };

    return fieldMap[field as keyof typeof fieldMap] || { name: dir };
};

export async function getClients({
    page,
    pageSize,
    search = "",
    type,
    city,
    order = "name",
    activeIncidents,
}: GetClientsParams): Promise<GetClientsResponse> {
    try {
        const orderBy = getOrder(order);
        const searchText = search || "";
        const typeFilter = type || undefined;
        const cityFilter = city || undefined;

        const where: Prisma.ClientWhereInput = {
            OR: [
                { name: { contains: searchText } },
                { address: { contains: searchText } },
                { city: { contains: searchText } },
                { taxId: { contains: searchText } },
                { referenceCode: { contains: searchText } },
            ],
        };

        if (typeFilter) {
            where.type = { key: { equals: typeFilter } };
        }

        if (cityFilter) {
            where.city = { equals: cityFilter };
        }

        if (activeIncidents) {
            where.incidents = {
                some: {
                    status: "OPEN",
                },
            };
        }

        const [clients, total] = await Promise.all([
            prisma.client.findMany({
                where,
                skip: (page - 1) * pageSize,
                take: pageSize,
                orderBy: orderBy as Prisma.ClientOrderByWithRelationInput,
                include: {
                    type: true,
                    _count: {
                        select: {
                            licenses: true,
                            devices: true,
                            incidents: true,
                        },
                    },
                },
            }),
            prisma.client.count({ where }),
        ]);

        const hasNextPage = page * pageSize < total;

        return {
            clients,
            hasNextPage,
            total,
        };
    } catch (error) {
        console.error("Error fetching clients:", error);
        throw new Error("Failed to fetch clients");
    }
}
