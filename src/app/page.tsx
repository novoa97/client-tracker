"use server";
import GeneralMapWrapper from "@/components/general-map-wrapper";
import { prisma } from "@/lib/prisma";

export default async function MapPage() {
  const clients = await prisma.client.findMany({
    include: {
      type: true,
    },
  });

  return (
    <div className="w-full h-[calc(100vh)]">
      <GeneralMapWrapper
        clients={clients}
        className="h-full"
      ></GeneralMapWrapper>
    </div>
  );
}
