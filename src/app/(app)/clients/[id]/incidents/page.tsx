import { prisma } from "@/lib/prisma";
import { IncidentsPage } from "./components/incidents-page";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ClientIncidentsPage({ params }: Props) {
  const { id } = await params;

  const incidents = await prisma.incident.findMany({
    where: {
      clientId: id,
    },
    orderBy: {
      date: "desc",
    },
  });

  return <IncidentsPage clientId={id} incidents={incidents} />;
}
