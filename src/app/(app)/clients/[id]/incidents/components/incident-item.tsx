import { Incident, IncidentStatus } from "@/generated/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { Calendar, CircleAlert, CircleCheck } from "lucide-react";
import { IncidentActions } from "./incident-actions";
import { cn } from "@/lib/utils";
interface Props {
  incident: Incident;
  onComplete: (incident: Incident) => void;
  onEdit: (incident: Incident) => void;
  onDelete: (incident: Incident) => void;
}

export function IncidentItem({
  incident,
  onComplete,
  onEdit,
  onDelete,
}: Props) {
  const t = useTranslations();
  const isOpen = incident.status === IncidentStatus.OPEN;

  const statusConfig = isOpen
    ? {
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-l-amber-500",
      icon: CircleAlert,
    }
    : {
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-l-emerald-500",
      icon: CircleCheck,
    };

  const StatusIcon = statusConfig.icon;

  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-200 hover:shadow-md border-l-4",
        statusConfig.border
      )}
    >
      <CardContent className="p-3 flex flex-row gap-3 items-start">
        <div
          className={cn(
            "rounded-full p-2 shrink-0 transition-colors",
            statusConfig.bg
          )}
        >
          <StatusIcon className={cn("h-5 w-5", statusConfig.color)} />
        </div>

        <div className="flex-1 min-w-0 flex flex-col gap-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-medium text-sm leading-none pt-1">
              {incident.title}
            </h3>
            <div className="flex items-center gap-2 shrink-0">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
                <Calendar className="h-3.5 w-3.5" />
                {incident.date.toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {incident.description ?? t("No description")}
          </p>
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 self-center">
          <IncidentActions
            incident={incident}
            onComplete={() => onComplete(incident)}
            onDelete={() => onDelete(incident)}
            onEdit={() => onEdit(incident)}
          />
        </div>
      </CardContent>
    </Card>
  );
}
