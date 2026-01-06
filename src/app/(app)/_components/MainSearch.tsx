"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { ClientWithType } from "@/app/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  clients: ClientWithType[];
  className?: string;
}

export function MainSearch({ clients, className }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!normalizedQuery) return clients.slice(0, 50);
    const matches = clients.filter((c) => {
      const hay =
        `${c.name} ${c.legalName} ${c.city} ${c.address}`.toLowerCase();
      return hay.includes(normalizedQuery);
    });
    return matches.slice(0, 50);
  }, [clients, normalizedQuery]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(true);
    setActiveIndex(0);
  };

  const handleSelect = (client: ClientWithType) => {
    setQuery(client.name);
    setShowSuggestions(false);
    setActiveIndex(0);

    const params = new URLSearchParams(searchParams?.toString());
    params.set("lat", String(client.latitude));
    params.set("lng", String(client.longitude));
    router.push(`${pathname}?${params.toString()}`);
    router.refresh();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || filtered.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const choice = filtered[activeIndex];
      if (choice) handleSelect(choice);
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  return (
    <div className={cn("relative", className)}>
      <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={query}
        onChange={handleChange}
        onFocus={() => setShowSuggestions(true)}
        onKeyDown={handleKeyDown}
        placeholder={t("Search client")}
        aria-autocomplete="list"
        aria-expanded={showSuggestions}
        className="pl-8"
      />
      {showSuggestions && normalizedQuery && filtered.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full max-h-72 overflow-auto rounded-md border bg-white shadow">
          {filtered.map((c, idx) => (
            <li
              key={c.id}
              className={
                "px-3 py-2 cursor-pointer text-sm hover:bg-gray-100 " +
                (idx === activeIndex ? "bg-gray-100" : "")
              }
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleSelect(c)}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-medium">{c.name}</span>
                <span className="text-xs text-gray-500">{c.city}</span>
              </div>
              <div className="text-xs text-gray-500 truncate">{c.address}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
