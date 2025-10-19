import { prisma } from "@/lib/prisma";
import { AddClientButton } from "./components/add-client-button";
import { InfiniteClientList } from "./components/infinite-client-list";
import { getClients } from "./actions/get-clients";
import { PageHeader } from "@/components/page-header";

type Props = {
  searchParams: Promise<{
    page?: string;
    search?: string;
    type?: string;
    city?: string;
    order?: string;
    activeIncidents?: string;
  }>;
};

export default async function ClientsPage({ searchParams }: Props) {
  const { search, type, city, order, activeIncidents } = await searchParams;

  const searchText = search || "";
  const typeFilter = type || undefined;
  const cityFilter = city || undefined;
  const orderBy = order || "name";
  const onlyActiveIncidents = activeIncidents === "true" ? true : undefined;

  // Get initial data for infinite scroll
  const initialData = await getClients({
    page: 1,
    pageSize: 15,
    search: searchText,
    type: typeFilter,
    city: cityFilter,
    order: orderBy,
    activeIncidents: onlyActiveIncidents,
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
    <div className="h-full flex flex-col">
      <PageHeader title="Clients" icon="users">
        <AddClientButton types={types} />
      </PageHeader>
      <div className="flex-1 overflow-hidden px-6">
        <InfiniteClientList
          initialClients={initialData.clients}
          initialHasNextPage={initialData.hasNextPage}
          initialTotal={initialData.total}
          searchParams={{
            search: searchText,
            type: typeFilter,
            city: cityFilter,
            order: orderBy,
            activeIncidents: onlyActiveIncidents ? "true" : undefined,
          }}
          types={types}
          cities={cities.map((city) => city.city)}
        />
      </div>
    </div>
  );
}
