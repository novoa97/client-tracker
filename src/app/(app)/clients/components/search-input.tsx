"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  Search,
  SlidersHorizontal,
  ArrowUpDown,
} from "lucide-react";
import { useTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { ClientType } from "@/generated/prisma";
import { Badge } from "@/components/ui/badge";
import { getTextColor } from "@/lib/colors";

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
  const currentOrder = searchParams.get("order") || "name";
  const currentActiveIncidents = searchParams.get("activeIncidents") === "true";

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

  function handleOrderChange(value: string): void {
    const params = new URLSearchParams(searchParams);
    if (value === "name") {
      params.delete("order");
    } else {
      params.set("order", value);
    }
    router.push(`/clients?${params.toString()}`);
  }

  function handleActiveIncidentsToggle(checked: boolean): void {
    const params = new URLSearchParams(searchParams);
    if (checked) {
      params.set("activeIncidents", "true");
    } else {
      params.delete("activeIncidents");
    }
    router.push(`/clients?${params.toString()}`);
  }

  return (
    <>
      <form onSubmit={handleSearch} className="flex gap-2 w-full my-1">
        <Input
          type="text"
          name="search"
          placeholder={t("Search client")}
          defaultValue={currentSearch}
          className="flex-1 h-10"
        />
        <Button type="submit" variant="outline" className="h-10">
          <Search className="h-4 w-4 mr-2" />
          <p className="hidden md:block">
            {isPending ? "Searching..." : "Search"}
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
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <DropdownMenuLabel>{t("Type")}</DropdownMenuLabel>
                <Select
                  value={currentType}
                  onValueChange={handleIndustryChange}
                >
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
                            color: getTextColor(type.color),
                            borderColor: type.color,
                            borderWidth: 3,
                          }}
                        >
                          {type.name}
                        </Badge>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1">
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
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={currentActiveIncidents}
                onCheckedChange={(checked) =>
                  handleActiveIncidentsToggle(Boolean(checked))
                }
              >
                {t("With active incidents")}
              </DropdownMenuCheckboxItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-10">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              <span className="hidden md:block">Sort</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="z-50 w-[220px] rounded-md border bg-white bg-popover p-2 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
          >
            <div className="space-y-2">
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <Select value={currentOrder} onValueChange={handleOrderChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="-name">Name (Z-A)</SelectItem>
                  <SelectItem value="type">Type (A-Z)</SelectItem>
                  <SelectItem value="-type">Type (Z-A)</SelectItem>
                  <SelectItem value="city">City (A-Z)</SelectItem>
                  <SelectItem value="-city">City (Z-A)</SelectItem>
                  <SelectItem value="licenses">
                    Licenses (Low to High)
                  </SelectItem>
                  <SelectItem value="-licenses">
                    Licenses (High to Low)
                  </SelectItem>
                  <SelectItem value="devices">Devices (Low to High)</SelectItem>
                  <SelectItem value="-devices">
                    Devices (High to Low)
                  </SelectItem>
                  <SelectItem value="createdAt">
                    Created Date (Oldest)
                  </SelectItem>
                  <SelectItem value="-createdAt">
                    Created Date (Newest)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </form>
    </>
  );
}
