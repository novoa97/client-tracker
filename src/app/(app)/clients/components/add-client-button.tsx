"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ClientType } from "@/generated/prisma";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  types: ClientType[];
  size?:
    | "default"
    | "icon"
    | "sm"
    | "lg"
    | "icon-sm"
    | "icon-lg"
    | null
    | undefined;
  className?: string;
}

export function AddClientButton({ types, size, className }: Props) {
  const t = useTranslations();

  return (
    <>
      {types.length === 0 ? (
        // Add tooltip to indicate that no types are available
        <Tooltip>
          <TooltipTrigger>
            <Button size="sm" className="h-8 gap-1" disabled={true}>
              <Plus className="h-3.5 w-3.5" />
              {t("Add Client")}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t("No types available client types")}</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        <Link href={"/clients/new"}>
          <Button
            size={size}
            className={cn("h-8 gap-1", className)}
            disabled={false}
          >
            <Plus className="h-3.5 w-3.5" />
            {t("Add Client")}
          </Button>
        </Link>
      )}
    </>
  );
}
