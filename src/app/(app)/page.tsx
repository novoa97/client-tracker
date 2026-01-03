"use server";
import GeneralMapWrapper from "@/components/general-map-wrapper";
import { PageHeader } from "@/components/page-header";
import { prisma } from "@/lib/prisma";
import { MainSearch } from "./_components/MainSearch";
import MainMap from "./_components/MainMap";

type Props = {
  searchParams: Promise<{
    lat?: string;
    lng?: string;
    search?: string;
  }>;
};

export default async function MapPage({ searchParams }: Props) {
  const { lat, lng, search } = await searchParams;

  const clients = await prisma.client.findMany({
    include: {
      type: true,
    },
  });

  // Get the center from the search params
  const center =
    lat && lng ? ([Number(lng), Number(lat)] as [number, number]) : undefined;

  return (
    <div className="w-full h-full flex flex-col">
      <PageHeader title="Map" icon="map">
        <MainSearch className="w-1/3" clients={clients} />
      </PageHeader>
      <div className="flex-1 min-h-0">
        <MainMap clients={clients} center={center} search={Boolean(search)} />
      </div>
    </div>
  );
}
