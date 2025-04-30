"use client";
import { ClientWithType } from "@/app/types";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Computer, InfoIcon, Key } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  client: ClientWithType;
}

export function ClientTabs({ client }: Props) {
  const t = useTranslations();
  const router = useRouter();

  const handleTabChange = (value: string) => {
    if (value === "general") router.push(`/clients/${client.id}`);
    else router.push(`/clients/${client.id}/${value}`);
  };

  //Get path for tab
  const path = usePathname();
  let tab = "general";
  if (path.includes("licenses")) tab = "licenses";
  else if (path.includes("devices")) tab = "devices";

  return (
    <Tabs
      defaultValue={tab}
      className="flex w-full min-h-0"
      onValueChange={handleTabChange}
    >
      <TabsList className="mb-2 w-full">
        <TabsTrigger value="general" className="flex items-center gap-1">
          <InfoIcon className="h-4 w-4" />
          {t("General")}
        </TabsTrigger>
        <TabsTrigger value="licenses" className="flex items-center gap-1">
          <Key className="h-4 w-4" />
          {t("Licenses")}
        </TabsTrigger>
        <TabsTrigger value="devices" className="flex items-center gap-1">
          <Computer className="h-4 w-4" />
          {t("Devices")}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
