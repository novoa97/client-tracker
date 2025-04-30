import { Header } from "@/components/header-section";
import { Settings } from "lucide-react";
import { SettingsTabs } from "./components/settings-tabs";
import { getTranslations } from "next-intl/server";

type Props = {
  children: React.ReactNode;
};

export default async function SettingsLayout({ children }: Props) {
  const t = await getTranslations();
  return (
    <div className="p-8 space-y-4 flex flex-col h-full">
      <Header icon={Settings} title={t("Settings")}></Header>
      <SettingsTabs />
      <div className="flex-1 flex flex-col min-h-0">{children}</div>
    </div>
  );
}
