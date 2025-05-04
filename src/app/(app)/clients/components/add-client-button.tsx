"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ClientType } from "@/generated/prisma";
import { PlusCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function AddClientButton({ types }: { types: ClientType[] }) {
  const t = useTranslations();

  return (
    <>
      {types.length === 0 ? (
        // Add tooltip to indicate that no types are available
        <Tooltip>
          <TooltipTrigger>
            <Button size="sm" className="h-8 gap-1" disabled={true}>
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                {t("Add Client")}
              </span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t("No types available client types")}</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        <Link href={"/clients/new"}>
          <Button size="sm" className="h-8 gap-1" disabled={false}>
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              {t("Add Client")}
            </span>
          </Button>
        </Link>
      )}
    </>
  );
}
