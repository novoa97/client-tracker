"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Client } from "@/generated/prisma";
import {
  Building,
  FileText,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useTranslations } from "use-intl";

interface Props {
  client: Client;
}

export function ClientInfo({ client }: Props) {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="mb-6">
      <CardHeader
        className="flex flex-row items-center justify-between pb-2 cursor-pointer md:cursor-default"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CardTitle>Información</CardTitle>
        <span className="md:hidden">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </CardHeader>

      <CardContent className={`${isOpen ? "block" : "hidden"} md:block`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <Building className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">{t("Legal Name")}</p>
              <p className="font-medium">{client.legalName}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">{t("Tax ID")}</p>
              <p className="font-medium">{client.taxId}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 md:col-span-2">
            <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">{t("Address")}</p>
              <p className="font-medium">{client.address}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
