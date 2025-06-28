"use client";
import { ClientWithType } from "@/app/types";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Computer, InfoIcon, Key } from "lucide-react";
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
  else if (path.includes("incidences")) tab = "incidences";

  return (
    <Tabs
      defaultValue={tab}
      className="flex w-full min-h-0"
      onValueChange={handleTabChange}
    >
      <TabsList className="mb-2 w-full">
        <TabsTrigger value="general" className="flex items-center gap-1">
          <InfoIcon className="h-4 w-4" />
          <span className="hidden md:block">{t("General")}</span>
        </TabsTrigger>
        <TabsTrigger value="licenses" className="flex items-center gap-1">
          <Key className="h-4 w-4" />
          <span className="hidden md:block">{t("Licenses")}</span>
        </TabsTrigger>
        <TabsTrigger value="devices" className="flex items-center gap-1">
          <Computer className="h-4 w-4" />
          <span className="hidden md:block">{t("Devices")}</span>
        </TabsTrigger>
        <TabsTrigger value="incidences" className="flex items-center gap-1">
          <AlertCircle className="h-4 w-4" />
          <span className="hidden md:block">{t("Incidents")}</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
