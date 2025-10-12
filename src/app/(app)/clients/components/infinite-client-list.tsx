"use client";

import { useState, useEffect, useCallback } from "react";
import { ClientWithTypeAndCount } from "@/app/types";
import { ClientList } from "./list/list";
import { ClientSearchForm } from "./search-input";
import { getClients } from "../actions/get-clients";
import { ClientType } from "@/generated/prisma";

interface InfiniteClientListProps {
  initialClients: ClientWithTypeAndCount[];
  initialHasNextPage: boolean;
  initialTotal: number;
  searchParams: {
    search?: string;
    type?: string;
    city?: string;
    order?: string;
  };
  types: ClientType[];
  cities: string[];
}

export function InfiniteClientList({
  initialClients,
  initialHasNextPage,
  searchParams,
  types,
  cities,
}: InfiniteClientListProps) {
  const [clients, setClients] =
    useState<ClientWithTypeAndCount[]>(initialClients);
  const [hasNextPage, setHasNextPage] = useState(initialHasNextPage);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);

  // Reset state when search params change
  useEffect(() => {
    setClients(initialClients);
    setHasNextPage(initialHasNextPage);
    setPage(1);
  }, [
    initialClients,
    initialHasNextPage,
    searchParams.search,
    searchParams.type,
    searchParams.city,
    searchParams.order,
  ]);

  const fetchNextPage = useCallback(async () => {
    if (isFetching || !hasNextPage) return;

    setIsFetching(true);
    try {
      const nextPage = page + 1;
      const result = await getClients({
        page: nextPage,
        pageSize: 15,
        search: searchParams.search,
        type: searchParams.type,
        city: searchParams.city,
        order: searchParams.order,
      });

      setClients((prev) => [...prev, ...result.clients]);
      setHasNextPage(result.hasNextPage);
      setPage(nextPage);
    } catch (error) {
      console.error("Error fetching next page:", error);
    } finally {
      setIsFetching(false);
    }
  }, [isFetching, hasNextPage, page, searchParams]);

  return (
    <div className="h-full flex flex-col">
      <div className="pt-4 pb-2">
        <ClientSearchForm types={types} cities={cities} />
      </div>
      <div className="flex-1 overflow-hidden">
        <ClientList
          clients={clients}
          hasNextPage={hasNextPage}
          isFetching={isFetching}
          fetchNextPage={fetchNextPage}
        />
      </div>
    </div>
  );
}
