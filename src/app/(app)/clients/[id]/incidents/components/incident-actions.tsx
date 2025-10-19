"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Check, Trash2, Edit } from "lucide-react";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Incident, IncidentStatus } from "@/generated/prisma";
import {
  AlertDialog,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { useTranslations } from "next-intl";

interface Props {
  incident: Incident;
  onComplete: (incident: Incident) => void;
  onEdit: (incident: Incident) => void;
  onDelete: (incident: Incident) => void;
}

export function IncidentActions({
  incident,
  onComplete,
  onEdit,
  onDelete,
}: Props) {
  const t = useTranslations();
  const [openComplete, setOpenComplete] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreVertical className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-36">
          {/** Complete */}
          <DropdownMenuItem
            className={
              incident.status === IncidentStatus.OPEN ? "text-green-500" : ""
            }
            disabled={incident.status === IncidentStatus.RESOLVED}
            onSelect={(e) => {
              e.preventDefault(); // evita que cierre el menú antes de abrir el diálogo
              setOpenComplete(true);
            }}
          >
            <Check
              className={`mr-2 h-4 w-4 ${
                incident.status === IncidentStatus.OPEN ? "text-green-500" : ""
              }`}
            />
            {t("Complete")}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {/** Edit */}
          <DropdownMenuItem
            disabled={incident.status === IncidentStatus.RESOLVED}
            onSelect={() => {
              setTimeout(() => {
                onEdit(incident);
              }, 0);
            }}
          >
            <Edit className="mr-2 h-4 w-4" />
            {t("Edit")}
          </DropdownMenuItem>
          {/** Delete */}
          <DropdownMenuItem
            className="text-red-500 focus:text-red-500"
            onSelect={(e) => {
              e.preventDefault(); // evita que cierre el menú antes de abrir el diálogo
              setOpenDelete(true);
            }}
          >
            <Trash2 className="mr-2 h-4 w-4 text-red-500" />
            {t("Delete")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Complete Dialog */}
      <AlertDialog open={openComplete} onOpenChange={setOpenComplete}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("Complete incident?")}</AlertDialogTitle>
            <AlertDialogDescription>
              {t("This action cannot be undone")}
              {". "}
              {t("Are you sure you want to mark the incident as completed?")}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("Cancel")}</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                onComplete(incident);
                setOpenComplete(false);
              }}
            >
              {t("Complete")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete Dialog */}
      <AlertDialog open={openDelete} onOpenChange={setOpenDelete}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("Delete incident?")}</AlertDialogTitle>
            <AlertDialogDescription>
              {t("This action cannot be undone")}
              {". "}
              {t("Are you sure you want to permanently delete the incident?")}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("Cancel")}</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                variant="ghost"
                onClick={() => {
                  onDelete(incident);
                  setOpenDelete(false);
                }}
              >
                {t("Delete")}
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
