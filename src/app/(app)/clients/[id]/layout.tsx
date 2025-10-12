import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { ClientSidebar } from "./components/client-sidebar";

type Props = {
  params: Promise<{
    id: string;
  }>;
  children: React.ReactNode;
};

export default async function ClientLayout({ params, children }: Props) {
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
    <div className="flex flex-row min-h-0 h-full w-full overflow-hidden">
      <ClientSidebar
        client={client}
        types={clientTypes}
        className="hidden md:flex"
      ></ClientSidebar>
      {/* <Header icon={User} title={client.name}></Header>
      <ClientTabs client={client}></ClientTabs> */}
      <div className="flex-1 flex flex-col min-h-0">{children}</div>
    </div>
  );
}
