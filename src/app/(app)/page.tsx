"use server";
import GeneralMapWrapper from "@/components/general-map-wrapper";
import { PageHeader } from "@/components/page-header";
import { prisma } from "@/lib/prisma";
import { GeneralMapSearch } from "../../components/general-map-search";

type Props = {
  searchParams: Promise<{
    lat?: string;
    lng?: string;
  }>;
};

export default async function MapPage({ searchParams }: Props) {
  const { lat, lng } = await searchParams;

  const clients = await prisma.client.findMany({
    include: {
      type: true,
    },
  });

  // Get the center from the search params
  const center =
    lat && lng ? ([Number(lat), Number(lng)] as [number, number]) : undefined;

  return (
    <div className="w-full h-[calc(100vh)] flex flex-col">
      <PageHeader title="Map" icon="map">
        <GeneralMapSearch className="w-1/3" clients={clients} />
      </PageHeader>
      <GeneralMapWrapper
        clients={clients}
        className="flex-1"
        center={center}
      ></GeneralMapWrapper>
    </div>
  );
}
