"use client";

import { ClientPage } from "../../components/client-page";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Incident } from "@/generated/prisma";
import { addIncident } from "../actions";
import { IncidentItem } from "./incident-item";
import { useState } from "react";
import { DialogContainer } from "@/components/dialog-container";
import { IncidentForm } from "./incident-form";
import { toast } from "sonner";

interface Props {
  clientId: string;
  incidents: Incident[];
}

export function IncidentsPage({ clientId, incidents }: Props) {
  const router = useRouter();
  const t = useTranslations();
  const [isAddIncidentDialogOpen, setIsAddIncidentDialogOpen] = useState(false);

  const handleAddIncident = async (data: {
    title: string;
    description?: string;
  }) => {
    await addIncident(clientId, {
      title: data.title,
      description: data.description,
    });
    setIsAddIncidentDialogOpen(false);
    router.refresh();
    toast.success(t("Incident added successfully"));
  };

  return (
    <>
      <ClientPage
        title={t("Incidents")}
        subtitle="Incidents"
        onBackClick={() => router.push("/clients")}
        addAction={() => setIsAddIncidentDialogOpen(true)}
      >
        <div className="flex flex-col h-full gap-2 overflow-y-auto">
          {incidents.map((incident) => (
            <IncidentItem key={incident.id} incident={incident} />
          ))}
        </div>
      </ClientPage>
      <DialogContainer
        open={isAddIncidentDialogOpen}
        onOpenChange={setIsAddIncidentDialogOpen}
        title={t("Add Incident")}
        description={t("Add a new incident")}
      >
        <IncidentForm onSubmit={handleAddIncident} />
      </DialogContainer>
    </>
  );
}
