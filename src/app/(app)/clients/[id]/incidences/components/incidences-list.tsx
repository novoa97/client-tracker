"use client";

import { CardList } from "@/components/card-list";
import { Incidence } from "@/generated/prisma";
import { useTranslations } from "next-intl";
import { IncidenceItem } from "./incidence-item";
import { useState } from "react";
import { DialogContainer } from "@/components/dialog-container";
import { IncidenceForm } from "./incidence-form";
import {
  addIncidence,
  closeIncidence,
  deleteIncidence,
  IncidenceData,
  updateIncidence,
} from "../actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  clientId: string;
  incidences: Incidence[];
}

export function IncidencesList({ clientId, incidences }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const [incidenceSelected, setIncidenceSelected] = useState<Incidence | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenCreateIncidenceDialog = () => {
    setIsDialogOpen(true);
  };

  const handleSumitForm = async (incidenceData: IncidenceData) => {
    if (incidenceSelected) {
      await updateIncidence(incidenceSelected.id, incidenceData);
      setIncidenceSelected(null);
      toast.success(t("Incidence updated"));
    } else {
      await addIncidence(clientId, incidenceData);
      toast.success(t("Incidence added"));
    }
    router.refresh();
    setIsDialogOpen(false);
  };

  const handleEditIncidence = async (incidence: Incidence) => {
    setIncidenceSelected(incidence);
    setIsDialogOpen(true);
  };

  const handleCloseIncidence = async (incidence: Incidence) => {
    await closeIncidence(incidence.id);
    toast.success(t("Incidence closed"));
    router.refresh();
  };

  const handleDeleteIncidence = async (incidence: Incidence) => {
    await deleteIncidence(incidence.id);
    toast.success(t("Incidence deleted"));
    router.refresh();
  };

  return (
    <>
      <CardList
        title={t("Incidents")}
        description={t("Incidents description")}
        buttonText={t("Add Incident")}
        emptyMessage={t("No incidents found")}
        onCreateClick={handleOpenCreateIncidenceDialog}
        variant="list"
      >
        {incidences.map((incidence) => (
          <IncidenceItem
            key={incidence.id}
            incidence={incidence}
            onEdit={handleEditIncidence}
            onClose={handleCloseIncidence}
            onDelete={handleDeleteIncidence}
          />
        ))}
      </CardList>
      <DialogContainer
        open={isDialogOpen}
        onOpenChange={(open) => {
          if (!open && incidenceSelected) setIncidenceSelected(null);
          setIsDialogOpen(open);
        }}
        title={t("Add Incident")}
      >
        <IncidenceForm
          onSubmit={handleSumitForm}
          onCancel={() => setIsDialogOpen(false)}
          incidence={incidenceSelected}
        />
      </DialogContainer>
    </>
  );
}
