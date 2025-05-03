"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Computer, Key, Settings2, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export function SettingsTabs() {
  const t = useTranslations();
  const router = useRouter();

  const handleTabChange = (value: string) => {
    if (value === "general") {
      router.push("/settings");
    } else {
      router.push(`/settings/${value}`);
    }
  };

  // Check path
  let tab = "general";
  const pathname = usePathname();
  if (pathname.includes("licenses")) tab = "licenses";
  if (pathname.includes("clients")) tab = "clients";
  if (pathname.includes("devices")) tab = "devices";

  return (
    <div className="flex flex-col min-h-0">
      <Tabs
        defaultValue={tab}
        onValueChange={handleTabChange}
        className="flex w-full h-full flex-1 flex-1 min-h-0"
      >
        <TabsList className="mb-4 w-full">
          <TabsTrigger value="general" className="flex items-center gap-1">
            <Settings2 className="h-4 w-4" />
            <span className="hidden md:block">{t("General")}</span>
          </TabsTrigger>
          <TabsTrigger value="clients" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span className="hidden md:block">{t("Clients")}</span>
          </TabsTrigger>
          <TabsTrigger value="licenses" className="flex items-center gap-1">
            <Key className="h-4 w-4" />
            <span className="hidden md:block">{t("Licenses")}</span>
          </TabsTrigger>
          <TabsTrigger value="devices" className="flex items-center gap-1">
            <Computer className="h-4 w-4" />
            <span className="hidden md:block">{t("Devices")}</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
