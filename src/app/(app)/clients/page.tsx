import { prisma } from "@/lib/prisma";
import { AddClientButton } from "./components/add-client-button";
import { Header } from "@/components/header";
import { Users } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { InfiniteClientList } from "./components/infinite-client-list";
import { getClients } from "./actions/get-clients";

type Props = {
  searchParams: Promise<{
    page?: string;
    search?: string;
    type?: string;
    city?: string;
    order?: string;
  }>;
};

export default async function ClientsPage({ searchParams }: Props) {
  const t = await getTranslations();
  const { search, type, city, order } = await searchParams;

  const searchText = search || "";
  const typeFilter = type || undefined;
  const cityFilter = city || undefined;
  const orderBy = order || "name";

  // Get initial data for infinite scroll
  const initialData = await getClients({
    page: 1,
    pageSize: 15,
    search: searchText,
    type: typeFilter,
    city: cityFilter,
    order: orderBy,
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
      <Header icon={Users} title={t("Clients")}>
        <AddClientButton types={types}></AddClientButton>
      </Header>
      <div className="flex-1 min-h-0">
        <InfiniteClientList
          initialClients={initialData.clients}
          initialHasNextPage={initialData.hasNextPage}
          initialTotal={initialData.total}
          searchParams={{
            search: searchText,
            type: typeFilter,
            city: cityFilter,
            order: orderBy,
          }}
          types={types}
          cities={cities.map((city) => city.city)}
        />
      </div>
    </div>
  );
}
