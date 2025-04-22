"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useTransition } from "react";

export function ClientSearchForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("search") || "";

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get("search")?.toString() || "";

    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      if (searchValue) {
        params.set("search", searchValue);
      } else {
        params.delete("search");
      }
      router.push(`/clients?${params.toString()}`);
    });
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 w-full my-1">
      <Input
        type="text"
        name="search"
        placeholder="Buscar cliente..."
        defaultValue={currentSearch}
        className="flex-1"
      />
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 text-sm border rounded-md"
        disabled={isPending}
      >
        <Search className="h-4 w-4 mr-2" />
        {isPending ? "Buscando..." : "Buscar"}
      </button>
    </form>
  );
}
