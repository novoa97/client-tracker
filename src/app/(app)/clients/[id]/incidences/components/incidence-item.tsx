import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Incidence } from "@/generated/prisma";
import { AlertCircle, Calendar, CheckCircle } from "lucide-react";

import { IncidenceActions } from "./incidence-actions";

interface Props {
  incidence: Incidence;
  onEdit: (incidence: Incidence) => void;
  onClose: (incidence: Incidence) => void;
  onDelete: (incidence: Incidence) => void;
}

export function IncidenceItem({ incidence, onEdit, onClose, onDelete }: Props) {
  return (
    <Card className="w-full gap-0">
      <CardHeader>
        <div className="flex">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold leading-tight">
              {incidence.title}
            </CardTitle>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Badge
              variant={!incidence.closed ? "destructive" : "secondary"}
              className="flex items-center gap-1"
            >
              {incidence.closed ? (
                <CheckCircle className="w-3 h-3" />
              ) : (
                <AlertCircle className="w-3 h-3" />
              )}
              {incidence.closed ? "Cerrada" : "Abierta"}
            </Badge>
            <IncidenceActions
              incidence={incidence}
              onEdit={onEdit}
              onClose={onClose}
              onDelete={onDelete}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {incidence.description && (
          <p className="text-muted-foreground mb-3 leading-relaxed">
            {incidence.description}
          </p>
        )}
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 mr-2" />
          <span>
            {new Date(incidence.date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
