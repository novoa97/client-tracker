"use client";

import { ClientWithTypeAndCount } from "@/app/types";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { darkenColor, getTextColor } from "@/lib/colors";
import { Computer, Key, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import DynamicIcon from "@/components/icon";
import { useTranslations } from "next-intl";

interface Props {
  client: ClientWithTypeAndCount;
}

export function ClientListItem({ client }: Props) {
  const router = useRouter();
  const t = useTranslations();

  const handleRowClick = (id: string, path?: "licenses" | "devices") => {
    if (path) {
      router.push(`/clients/${id}/${path}`);
    } else {
      router.push(`/clients/${id}`);
    }
  };

  return (
    <Card
      className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
      onClick={() => handleRowClick(client.id)}
    >
      <CardHeader>
        <CardTitle className="flex flex-col gap-4">
          <div className="flex flex-row gap-3 items-center">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{
                backgroundColor: client.type?.color,
                borderWidth: 3,
                borderColor: darkenColor(client.type?.color, 30),
              }}
            >
              <DynamicIcon
                name={client.type?.icon}
                className="h-5 w-5"
                style={{
                  color: getTextColor(client.type?.color),
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-medium truncate whitespace-nowrap">
                {client.name}
              </p>
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <p className="text-sm">{client.city}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <Badge
              variant="secondary"
              className="text-sm"
              onClick={() => handleRowClick(client.id, "licenses")}
            >
              <Key className="h-6 w-6" />
              {client._count.licenses} {t("licenses")}
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm"
              onClick={() => handleRowClick(client.id, "devices")}
            >
              <Computer className="h-6 w-6" />
              {client._count.devices} {t("devices")}
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
