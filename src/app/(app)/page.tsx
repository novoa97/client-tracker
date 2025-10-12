"use server";
import GeneralMapWrapper from "@/components/general-map-wrapper";
import { PageHeader } from "@/components/page-header";
import { prisma } from "@/lib/prisma";

export default async function MapPage() {
  const clients = await prisma.client.findMany({
    include: {
      type: true,
    },
  });

  return (
    <div className="w-full h-[calc(100vh)]">
      <PageHeader title="Map" icon="map" />
      <GeneralMapWrapper
        clients={clients}
        className="h-full"
      ></GeneralMapWrapper>
    </div>
  );
}
