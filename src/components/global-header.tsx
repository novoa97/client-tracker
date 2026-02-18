"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import DynamicIcon from "./icon";
import { useHeader } from "@/hooks/useHeader";
import { Skeleton } from "./ui/skeleton";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronLeftIcon } from "lucide-react";

export function GlobalHeader() {
  const { title, icon, buttonBack, children } = useHeader();
  const router = useRouter();

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background px-4">
      <SidebarTrigger className="-ml-1 text-foreground hover:bg-accent hover:text-accent-foreground" />
      {buttonBack && (
        <Button
          variant="ghost"
          size="icon"
          className="size-7 text-foreground hover:bg-accent hover:text-accent-foreground"
          onClick={() => {
            const backOrigin = sessionStorage.getItem("backOrigin");
            if (backOrigin) {
              sessionStorage.removeItem("backOrigin");
              router.push(backOrigin);
            } else {
              router.back();
            }
          }}
        >
          <ChevronLeftIcon className="size-4" />
          <span className="sr-only">Go back</span>
        </Button>
      )}
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4 bg-border"
      />
      <div className="flex items-center gap-2 w-full min-w-0">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {title && icon ? (
            <>
              <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted">
                <DynamicIcon
                  name={icon}
                  className="size-4 text-muted-foreground"
                />
              </div>
              <h1 className="truncate text-sm font-semibold text-foreground">
                {title}
              </h1>
            </>
          ) : (
            <>
              <Skeleton className="size-8 shrink-0 rounded-md" />
              <Skeleton className="h-5 w-24 shrink-0 rounded-md" />
            </>
          )}
        </div>
        {children}
      </div>
    </header>
  );
}
