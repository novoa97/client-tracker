import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { IncidentStatus } from "@/generated/prisma";
import ClientMapWrapper from "./components/client-map-wrapper";
import { ClientSidebar } from "./components/client-sidebar";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ClientPage({ params }: Props) {
  const { id } = await params;

  const client = await prisma.client.findUnique({
    where: { id: id },
    include: {
      type: true,
      _count: {
        select: {
          incidents: {
            where: {
              status: IncidentStatus.OPEN,
            },
          },
        },
      },
    },
  });

  if (!client) return notFound();

  const clientTypes = await prisma.clientType.findMany();

  return (
    <>
      {/* Desktop */}
      <ClientMapWrapper
        client={client}
        className="w-full h-full hidden md:block"
      ></ClientMapWrapper>
      {/* Mobile */}
      <ClientSidebar
        types={clientTypes}
        client={client}
        className="w-full h-full md:hidden"
      ></ClientSidebar>
    </>
  );
}
