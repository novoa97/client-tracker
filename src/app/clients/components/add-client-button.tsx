"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function AddClientButton() {
  const t = useTranslations();

  return (
    <Link href={"/clients/new"}>
      <Button size="sm" className="h-8 gap-1">
        <PlusCircle className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          {t("Add Client")}
        </span>
      </Button>
    </Link>
  );
}
