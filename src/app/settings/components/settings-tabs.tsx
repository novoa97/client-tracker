"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Computer, Key, Settings2, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { GeneralTab } from "./general-tab";
import { LicenseTypesTab } from "./license-types/license-types-tab";
import { LicenseWithInUse } from "../actions/get-licenses-type";
import { DeviceTypeWithInUse } from "../actions/get-devices-type";
import { ClientTypeWithInUse } from "../actions/get-client-type";
import { ClientTypesTab } from "./client-types/client-types-tab";
import { DeviceTypesTab } from "./device-types/device-types-tab";
import { addLicenseType } from "../actions/add-license-type";
import { deleteLicenseType } from "../actions/delete-license-type";

interface Props {
  tab: string;
  clients: ClientTypeWithInUse[];
  licenses: LicenseWithInUse[];
  devices: DeviceTypeWithInUse[];
}

export function SettingsTabs({ tab, clients, licenses, devices }: Props) {
  const t = useTranslations();
  const router = useRouter();

  const handleTabChange = (value: string) => {
    router.push(`/settings?tab=${value}`);
  };

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <Tabs
        defaultValue={tab || "general"}
        onValueChange={handleTabChange}
        className="flex w-full h-full flex-1 flex-1 min-h-0"
      >
        <TabsList className="mb-4 w-full">
          <TabsTrigger value="general" className="flex items-center gap-1">
            <Settings2 className="h-4 w-4" />
            {t("General")}
          </TabsTrigger>
          <TabsTrigger value="clients" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {t("Clients")}
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
        {/* General Tab */}
        <TabsContent value="general">
          <GeneralTab />
        </TabsContent>
        {/* Client Types Tab */}
        <TabsContent value="clients" className="flex-1 flex flex-col min-h-0">
          <ClientTypesTab types={clients} />
        </TabsContent>
        {/* Licenses Tab */}
        <TabsContent value="licenses" className="flex-1 flex flex-col min-h-0">
          <LicenseTypesTab
            types={licenses}
            createLicense={addLicenseType}
            deleteLicense={deleteLicenseType}
          />
        </TabsContent>
        {/* Devices Tab */}
        <TabsContent value="devices" className="flex-1 flex flex-col min-h-0">
          <DeviceTypesTab types={devices} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
