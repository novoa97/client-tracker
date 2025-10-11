"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import DynamicIcon from "./icon";
import { useHeader } from "@/hooks/useHeader";
import { Skeleton } from "./ui/skeleton";

export function GlobalHeader() {
  const { title, icon, children } = useHeader();

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4"
      />
      <div className="flex items-center gap-2 w-full">
        <div className="flex items-center gap-2 flex-1">
          {title && icon ? (
            <>
              <div className="w-8 h-8 rounded-md flex items-center justify-center bg-gray-100">
                <DynamicIcon name={icon} className="w-4 h-4" />
              </div>
              <h1 className="text-md font-bold">{title}</h1>
            </>
          ) : (
            <>
              <Skeleton className="w-8 h-8 rounded-md" />
              <Skeleton className="w-24 h-4 rounded-md" />
            </>
          )}
        </div>
        {children}
      </div>
    </header>
  );
}
