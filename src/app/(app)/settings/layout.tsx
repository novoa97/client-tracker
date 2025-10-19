import { SettingsTabs } from "./components/settings-tabs";
import { PageHeader } from "@/components/page-header";

type Props = {
  children: React.ReactNode;
};

export default async function SettingsLayout({ children }: Props) {
  return (
    <div className="p-4 md:p-8 space-y-4 flex flex-col h-full">
      <PageHeader title={"Settings"} icon="settings"></PageHeader>
      <SettingsTabs />
      <div className="flex-1 flex flex-col min-h-0">{children}</div>
    </div>
  );
}
