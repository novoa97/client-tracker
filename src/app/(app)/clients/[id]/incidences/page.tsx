import { prisma } from "@/lib/prisma";
import { IncidencesList } from "./components/incidences-list";

export default async function ClientIncidencePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const incidences = await prisma.incidence.findMany({
    where: {
      clientId: id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return <IncidencesList clientId={id} incidences={incidences} />;
}
