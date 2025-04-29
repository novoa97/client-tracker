import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ClientInfo } from "./components/client-info";
import { ClientNotes } from "./components/client-notes";
import MapWrapper from "@/components/map-wrapper";
import { ClientMap } from "@/components/client-map";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    tab: string;
  };
};

export default async function ClientPage({ params, searchParams }: Props) {
  const { id } = await params;

  const client = await prisma.client.findUnique({
    where: { id: id },
    include: {
      type: true,
    },
  });

  if (!client) return notFound();

  const clientTypes = await prisma.clientType.findMany();

  return (
    <>
      <ClientInfo client={client} types={clientTypes} />
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
    </>
  );
}
