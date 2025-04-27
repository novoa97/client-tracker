import { Header } from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Computer, Key, Settings, Settings2, Users } from "lucide-react";
import { GeneralSettings } from "./components/general-settings";
import { LicenseTypeSettings } from "./components/license-type-settings";
import { DeviceTypeSettings } from "./components/device-type-settings";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { addLicenseType } from "./actions/add-license-type";
import { deleteLicenseType } from "./actions/delete-license-type";
import { getTranslations } from "next-intl/server";
import { getLicensesType } from "./actions/get-licenses-type";
import { getDevicesType } from "./actions/get-devices-type";
import { ClientTypeSettings } from "./components/client-type-settings";
import { getClientTypes } from "./actions/get-client-type";

export default async function SettingsPage() {
  const t = await getTranslations();
  const [licensesTypes, deviceTypes, clientTypes] = await Promise.all([
    getLicensesType(),
    getDevicesType(),
    getClientTypes(),
  ]);

  return (
    <div className="p-8 space-y-4 flex flex-col h-full">
      <Header icon={Settings} title={t("Settings")}>
        {" "}
      </Header>
      <div className="flex-1 flex flex-col min-h-0">
        <Tabs
          defaultValue="general"
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
            <GeneralSettings />
          </TabsContent>
          {/* Client Types Tab */}
          <TabsContent value="clients" className="flex-1 flex flex-col min-h-0">
            <ClientTypeSettings types={clientTypes} />
          </TabsContent>
          {/* Licenses Tab */}
          <TabsContent
            value="licenses"
            className="flex-1 flex flex-col min-h-0"
          >
            <LicenseTypeSettings
              types={licensesTypes}
              createLicense={addLicenseType}
              deleteLicense={deleteLicenseType}
            />
          </TabsContent>
          {/* Devices Tab */}
          <TabsContent value="devices" className="flex-1 flex flex-col min-h-0">
            <DeviceTypeSettings types={deviceTypes} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
