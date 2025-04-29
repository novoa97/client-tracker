"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

type Props = {
  page: number;
  pageSize: number;
  total: number;
};

export function Pagination({ page, pageSize, total }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);

  const goToPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`/clients?${params.toString()}`);
  };

  return (
    <>
      <div className="hidden md:flex items-center justify-between border-t py-3 text-sm w-full">
        <div className="text-muted-foreground">
          Mostrando {total === 0 ? 0 : `${start}-${end}`} de {total} cliente
          {total === 1 ? "" : "s"}
        </div>

        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => goToPage(page - 1)}
            disabled={page <= 1}
          >
            ← Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => goToPage(page + 1)}
            disabled={page >= totalPages}
          >
            Siguiente →
          </Button>
        </div>
      </div>
      <div className="flex md:hidden flex-col items-center justify-between border-t py-3 text-sm w-full">
        <div className="flex w-full gap-2">
          <Button
            variant="outline"
            className="w-1/2"
            size="sm"
            onClick={() => goToPage(page - 1)}
            disabled={page <= 1}
          >
            ← Anterior
          </Button>
          <Button
            variant="outline"
            className="w-1/2"
            size="sm"
            onClick={() => goToPage(page + 1)}
            disabled={page >= totalPages}
          >
            Siguiente →
          </Button>
        </div>
        <div className="text-muted-foreground">
          Mostrando {total === 0 ? 0 : `${start}-${end}`} de {total} cliente
          {total === 1 ? "" : "s"}
        </div>
      </div>
    </>
  );
}
