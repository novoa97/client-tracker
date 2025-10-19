"use client";

import { ClientPage } from "../../components/client-page";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Incident } from "@/generated/prisma";
import {
  addIncident,
  completeIncident,
  deleteIncident,
  editIncident,
} from "../actions";
import { IncidentItem } from "./incident-item";
import { useState } from "react";
import { DialogContainer } from "@/components/dialog-container";
import { IncidentForm } from "./incident-form";
import { toast } from "sonner";
import { AlertCircle } from "lucide-react";

interface Props {
  clientId: string;
  incidents: Incident[];
}

export function IncidentsPage({ clientId, incidents }: Props) {
  const router = useRouter();
  const t = useTranslations();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [incidentToEdit, setIncidentToEdit] = useState<Incident | null>(null);

  const handleAddIncident = async (data: {
    title: string;
    date: Date;
    description?: string;
  }) => {
    await addIncident(clientId, {
      title: data.title,
      description: data.description,
      date: data.date,
    });
    setIsDialogOpen(false);
    router.refresh();
    toast.success(t("Incident added successfully"));
  };

  const handleEditIncident = async (data: {
    title: string;
    date: Date;
    description?: string;
  }) => {
    await editIncident(incidentToEdit!.id, {
      title: data.title,
      date: data.date,
      description: data.description,
    });
    setIsDialogOpen(false);
    setIncidentToEdit(null);
    router.refresh();
    toast.success(t("Incident edited successfully"));
  };

  const handleCompleteIncident = async (incident: Incident) => {
    await completeIncident(incident.id);
    router.refresh();
    toast.success(t("Incident completed successfully"));
  };

  const handleDeleteIncident = async (incident: Incident) => {
    await deleteIncident(incident.id);
    router.refresh();
    toast.success(t("Incident deleted successfully"));
  };

  return (
    <>
      <ClientPage
        icon="alert-circle"
        title={t("Incidents")}
        subtitle={t("Incidents registered for this client")}
        onBackClick={() => router.push("/clients/" + clientId)}
        addAction={() => {
          setIncidentToEdit(null);
          setIsDialogOpen(true);
        }}
        empty={incidents.length === 0}
        emptyMessage={t("Not exists incidents")}
        emptyIcon={<AlertCircle />}
      >
        <div className="flex flex-col h-full gap-2 overflow-y-auto">
          {incidents.map((incident) => (
            <IncidentItem
              key={incident.id}
              incident={incident}
              onComplete={handleCompleteIncident}
              onDelete={handleDeleteIncident}
              onEdit={(incident) => {
                setIncidentToEdit(incident);
                setIsDialogOpen(true);
              }}
            />
          ))}
        </div>
      </ClientPage>
      <DialogContainer
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title={t("Add Incident")}
        description={t("Add a new incident")}
      >
        {incidentToEdit ? (
          <IncidentForm
            onSubmit={handleEditIncident}
            defaultValues={incidentToEdit}
          />
        ) : (
          <IncidentForm onSubmit={handleAddIncident} />
        )}
      </DialogContainer>
    </>
  );
}
