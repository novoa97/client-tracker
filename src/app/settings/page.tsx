import { Header } from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Computer, Key, Settings, Settings2 } from "lucide-react";
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

export default async function SettingsPage() {
  const t = await getTranslations();
  const [licensesTypes, deviceTypes] = await Promise.all([
    getLicensesType(),
    getDevicesType(),
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
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Configure general application settings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GeneralSettings />
              </CardContent>
            </Card>
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
