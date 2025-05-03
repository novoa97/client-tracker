import { Header } from "@/components/header";
import { prisma } from "@/lib/prisma";
import { User } from "lucide-react";
import { notFound } from "next/navigation";
import { ClientTabs } from "./components/client-tabs";

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

  return (
    <div className="p-4 md:p-8 space-y-4 flex flex-col h-full">
      <Header icon={User} title={client.name}></Header>
      <ClientTabs client={client}></ClientTabs>
      <div className="flex-1 flex flex-col min-h-0">{children}</div>
    </div>
  );
}
