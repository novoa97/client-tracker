import { prisma } from "@/lib/prisma";
import { ClientTable } from "./components/table/table";
import { AddClientButton } from "./components/add-client-button";
import { deleteClient } from "./actions/delete-client";
import { ClientSearchForm } from "./components/search-input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Pagination } from "./components/pagination";
import { Header } from "@/components/header";
import { Users } from "lucide-react";
import { Prisma } from "@/generated/prisma";

type Props = {
  searchParams: Promise<{
    page?: string;
    search?: string;
    type?: string;
    city?: string;
    order?: string;
  }>;
};

const getOrder = (order: string) => {
  const dir = order.startsWith("-") ? "desc" : "asc";
  const field = order.startsWith("-") ? order.substring(1) : order;

  // Map frontend field names to database fields
  const fieldMap: { [key: string]: any } = {
    name: { name: dir },
    type: { type: { name: dir } },
    licenses: { licenses: { _count: dir } },
    devices: { devices: { _count: dir } },
    city: { city: dir },
    createdAt: { createdAt: dir },
  };

  return fieldMap[field] || { name: dir };
};

export default async function ClientsPage({ searchParams }: Props) {
  const { page, search, type, city, order } = await searchParams;

  const orderBy = order ? getOrder(order) : { name: "desc" };
  const pageNumber = Number(page ?? "1");
  const pageSize = 15;
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

  const totalClients = await prisma.client.count({
    where,
  });

  const clients = await prisma.client.findMany({
    where,
    skip: (pageNumber - 1) * pageSize,
    take: pageSize,
    orderBy: orderBy,
    include: {
      type: true,
      _count: {
        select: {
          licenses: true,
          devices: true,
        },
      },
    },
  });

  const types = await prisma.clientType.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const cities = await prisma.client.findMany({
    select: {
      city: true,
    },
    distinct: ["city"],
  });

  return (
    <div className="p-4 md:p-8 space-y-4 flex flex-col h-full">
      <Header icon={Users} title={"Clients"}>
        <AddClientButton types={types}></AddClientButton>
      </Header>
      <Card className="flex-1 flex flex-col h-full overflow-hidden">
        <CardHeader>
          <ClientSearchForm
            types={types}
            cities={cities.map((city) => city.city)}
          ></ClientSearchForm>
        </CardHeader>
        <CardContent className="flex-1 overflow-auto h-full">
          <ClientTable clients={clients} onDelete={deleteClient} />
        </CardContent>
        <CardFooter>
          <Pagination
            total={totalClients}
            page={pageNumber}
            pageSize={pageSize}
          ></Pagination>
        </CardFooter>
      </Card>
    </div>
  );
}
