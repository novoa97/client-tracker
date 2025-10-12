import { prisma } from "@/lib/prisma";
import { IncidentsPage } from "./components/incidents-page";

export default async function ClientIncidentsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const incidents = await prisma.incident.findMany({
    where: {
      clientId: id,
    },
  });

  return <IncidentsPage clientId={id} incidents={incidents} />;
}
