import { Incident, IncidentStatus } from "@/generated/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { Calendar, CircleAlert, CircleCheck } from "lucide-react";
import { IncidentActions } from "./incident-actions";
import { Badge } from "@/components/ui/badge";
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

  return (
    <Card className="py-4">
      <CardContent className="flex flex-row gap-4">
        <div className="flex-1 flex flex-col gap-2 justify-between">
          {/** Title and description */}
          <div className="flex flex-row gap-3 items-center">
            {incident.status === IncidentStatus.OPEN ? (
              <CircleAlert
                className="mt-0.5 h-5 w-5 shrink-0"
                style={{ color: "#eab308" }}
              />
            ) : (
              <CircleCheck
                className="mt-0.5 h-5 w-5 shrink-0"
                style={{ color: "#10b981" }}
              />
            )}
            <div className="flex-1 flex lg:flex-row flex-col gap-2">
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold leading-tight">
                  {incident.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground text-start">
                  {incident.description ?? t("No description")}
                </p>
              </div>
              <div className="flex items-center">
                <Badge variant="outline">
                  <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">
                    {incident.date.toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </p>
                </Badge>
              </div>
            </div>
          </div>
        </div>
        {/** Actions */}
        <div className="flex items-center">
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
