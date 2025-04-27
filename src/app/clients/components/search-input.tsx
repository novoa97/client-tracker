"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { useState, useTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { ClientType } from "@/generated/prisma";
import { Badge } from "@/components/ui/badge";
import { darkenColor } from "@/lib/colors";

export function ClientSearchForm({
  types,
  cities,
}: {
  types: ClientType[];
  cities: string[];
}) {
  const t = useTranslations();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("search") || "";
  const currentType = searchParams.get("type") || "";
  const currentCity = searchParams.get("city") || "";

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

  function handleIndustryChange(value: string): void {
    const params = new URLSearchParams(searchParams);
    if (value === "all") {
      params.delete("type");
    } else {
      params.set("type", value);
    }
    router.push(`/clients?${params.toString()}`);
  }

  function handleCityChange(value: string): void {
    const params = new URLSearchParams(searchParams);
    if (value === "all") {
      params.delete("city");
    } else {
      params.set("city", value);
    }
    router.push(`/clients?${params.toString()}`);
  }

  return (
    <>
      <form onSubmit={handleSearch} className="flex gap-2 w-full my-1">
        <Input
          type="text"
          name="search"
          placeholder="Buscar cliente..."
          defaultValue={currentSearch}
          className="flex-1"
        />
        <Button type="submit" variant="outline" className="h-10">
          <Search className="h-4 w-4 mr-2" />
          <p className="hidden md:block">
            {isPending ? "Buscando..." : "Buscar"}
          </p>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-10">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              <span className="hidden md:block">{t("Filters")}</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="z-50 w-[220px] rounded-md border bg-white bg-popover p-2 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
          >
            <div className="space-y-2">
              <DropdownMenuLabel>{t("Type")}</DropdownMenuLabel>
              <Select value={currentType} onValueChange={handleIndustryChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t("All Types")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("All Types")}</SelectItem>
                  {types.map((type) => (
                    <SelectItem key={type.key} value={type.key}>
                      <Badge
                        variant="outline"
                        style={{
                          backgroundColor: type.color,
                          color: "white",
                          borderColor: darkenColor(type.color, 30),
                          borderWidth: 3,
                        }}
                      >
                        {type.name}
                      </Badge>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <DropdownMenuLabel>{t("City")}</DropdownMenuLabel>
              <Select value={currentCity} onValueChange={handleCityChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t("All Cities")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("All Cities")}</SelectItem>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </form>
    </>
  );
}
