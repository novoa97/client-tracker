"use client";

import { ClientWithTypeAndCount } from "@/app/types";
import { ClientListItem } from "./item";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { Loader2 } from "lucide-react";

interface ClientListProps {
  clients: ClientWithTypeAndCount[];
  hasNextPage: boolean;
  isFetching: boolean;
  fetchNextPage: () => void;
}

export function ClientList({
  clients,
  hasNextPage,
  isFetching,
  fetchNextPage,
}: ClientListProps) {
  const { lastElementRef } = useInfiniteScroll({
    hasNextPage,
    isFetching,
    fetchNextPage,
  });

  return (
    <div className="h-full overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-1">
        {clients.map((client) => (
          <div key={client.id}>
            <ClientListItem client={client} />
          </div>
        ))}
      </div>

      {isFetching && (
        <div className="flex justify-center items-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      )}

      {/* Invisible element to trigger infinite scroll */}
      {hasNextPage && !isFetching && (
        <div ref={lastElementRef} className="h-1" />
      )}
    </div>
  );
}
