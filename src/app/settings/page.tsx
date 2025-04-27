import { Header } from "@/components/header";
import { Settings } from "lucide-react";
import { getLicensesType } from "./actions/get-licenses-type";
import { getDevicesType } from "./actions/get-devices-type";
import { getClientTypes } from "./actions/get-client-type";
import { SettingsTabs } from "./components/settings-tabs";
import { getTranslations } from "next-intl/server";

interface Props {
  searchParams: { tab: string };
}

export default async function SettingsPage({ searchParams }: Props) {
  const { tab } = await searchParams;
  const t = await getTranslations();

  const [licenseTypes, deviceTypes, clientTypes] = await Promise.all([
    getLicensesType(),
    getDevicesType(),
    getClientTypes(),
  ]);

  return (
    <div className="p-8 space-y-4 flex flex-col h-full">
      <Header icon={Settings} title={t("Settings")}>
        {" "}
      </Header>
      <SettingsTabs
        tab={tab}
        clients={clientTypes}
        licenses={licenseTypes}
        devices={deviceTypes}
      />
    </div>
  );
}
