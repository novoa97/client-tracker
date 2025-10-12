import { Incident } from "@/generated/prisma";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  incident: Incident;
}

export function IncidentItem({ incident }: Props) {
  return (
    <Card className="py-4">
      <CardContent>
        <h3>{incident.title}</h3>
        <p>{incident.description}</p>
      </CardContent>
    </Card>
  );
}
