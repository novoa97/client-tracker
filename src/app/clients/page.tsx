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
import { Header } from "@/components/Header";
import { Users } from "lucide-react";

export default async function ClientsPage({ searchParams }: any) {
  const page = Number(searchParams?.page ?? "1");
  const pageSize = 15;
  const search = searchParams?.search || "";

  const totalClients = await prisma.client.count({
    where: {
      name: { contains: search },
    },
  });

  const clients = await prisma.client.findMany({
    where: {
      OR: [
        {
          name: { contains: search },
        },
        {
          address: { contains: search },
        },
        {
          city: { contains: search },
        },
      ],
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8 space-y-4 flex flex-col h-screen">
      <Header icon={Users} title={"Clients"}>
        <AddClientButton></AddClientButton>
      </Header>
      <Card className="flex-1 flex flex-col h-full overflow-hidden">
        <CardHeader>
          <ClientSearchForm></ClientSearchForm>
        </CardHeader>
        <CardContent className="flex-1 overflow-auto h-full">
          <ClientTable clients={clients} onDelete={deleteClient} />
        </CardContent>
        <CardFooter>
          <Pagination
            total={totalClients}
            page={page}
            pageSize={pageSize}
          ></Pagination>
        </CardFooter>
      </Card>
    </div>
  );
}
