"use server";
import GeneralMap from "@/components/Map";
import MapWrapper from "@/components/MapWrapper";
import { prisma } from "@/lib/prisma";

export default async function MapPage() {
  const clients = await prisma.client.findMany();

  return (
    <div className="w-full h-[calc(100vh)]">
      <MapWrapper className="h-full">
        <GeneralMap clients={clients}></GeneralMap>
      </MapWrapper>
    </div>
  );
}
