import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ClientInfo } from "./components/client-info";
import { Header } from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Computer, Key, Map, Edit, User, InfoIcon } from "lucide-react";
import { LicensesList } from "./components/licenses-list";
import { Button } from "@/components/ui/button";
import { DevicesList } from "./components/devices-list";
import { getTranslations } from "next-intl/server";
import { ClientMap } from "@/components/client-map";
import { ClientNotes } from "./components/client-notes";
import MapWrapper from "@/components/map-wrapper";
import { DialogContainer } from "@/components/dialog-container";
import { EditClientForm } from "./components/edit-client-form";

type Props = {
  params: {
    id: string;
  };
};

export default async function ClientPage({ params }: Props) {
  const t = await getTranslations();
  const { id } = await params;
  const client = await prisma.client.findUnique({
    where: { id: id },
    include: {
      type: true,
    },
  });

  if (!client) return notFound();

  const [licenses, devices] = await Promise.all([
    prisma.license.findMany({
      where: {
        clientId: client.id,
        parentId: null,
      },
      include: {
        type: true,
        subLicenses: {
          include: {
            type: true,
          },
        },
      },
    }),
    prisma.device.findMany({
      where: {
        clientId: client.id,
      },
      include: {
        type: true,
      },
    }),
  ]);

  const [licenseTypes, deviceTypes] = await Promise.all([
    prisma.licenseType.findMany(),
    prisma.deviceType.findMany(),
  ]);

  const handleNotesChange = (notes: string) => {
    console.log(notes);
  };

  return (
    <div className="p-8 space-y-4 flex flex-col h-full">
      <Header icon={User} title={client.name}></Header>
      <Tabs
        defaultValue="general"
        className="flex w-full h-full flex-1 flex-1 min-h-0"
      >
        <TabsList className="mb-4 w-full">
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
        <TabsContent value="general" className="flex-1 flex flex-col min-h-0">
          <ClientInfo client={client} />
          {/* Escritorio */}
          <div className="hidden md:flex flex-1 flex-row w-full gap-2">
            <div className="w-1/2 h-full">
              <ClientNotes client={client} />
            </div>
            <MapWrapper className="w-1/2 h-full">
              <ClientMap client={client}></ClientMap>
            </MapWrapper>
          </div>
          {/* Mobil */}
          <div className="md:hidden flex flex-1 flex-col w-full gap-2">
            <div className="w-full h-full">
              <ClientNotes client={client} />
            </div>
            <MapWrapper className="w-full h-full">
              <ClientMap client={client}></ClientMap>
            </MapWrapper>
          </div>
        </TabsContent>
        <TabsContent value="licenses" className="flex-1 flex flex-col min-h-0">
          <LicensesList
            types={licenseTypes}
            licenses={licenses}
            client={client}
          />
        </TabsContent>
        <TabsContent value="devices" className="flex-1 flex flex-col min-h-0">
          <DevicesList client={client} devices={devices} types={deviceTypes} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
