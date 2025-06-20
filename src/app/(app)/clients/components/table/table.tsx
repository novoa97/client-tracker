// /src/app/clients/components/table/client-table.tsx
"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { TableActions } from "./table-actions";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import dayjs from "dayjs";
import { ClientWithTypeAndCount } from "@/app/types";
import { Badge } from "@/components/ui/badge";
import { darkenColor, getTextColor } from "@/lib/colors";
import { Computer, Key } from "lucide-react";

type Props = {
  clients: ClientWithTypeAndCount[];
  onDelete: (id: string) => Promise<void>;
};

export function ClientTable({ clients, onDelete }: Props) {
  const t = useTranslations();
  const router = useRouter();

  const handleRowClick = (id: string, path?: "licenses" | "devices") => {
    if (path) {
      router.push(`/clients/${id}/${path}`);
    } else {
      router.push(`/clients/${id}`);
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t("Name")}</TableHead>
          <TableHead>{t("Type")}</TableHead>
          <TableHead>{t("Licenses")}</TableHead>
          <TableHead>{t("Devices")}</TableHead>
          <TableHead>{t("City")}</TableHead>
          <TableHead>{t("Created At")}</TableHead>
          <TableHead className="text-right">{t("Actions")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clients.map((client) => (
          <TableRow
            key={client.id}
            className="cursor-pointer hover:bg-muted"
            onClick={() => handleRowClick(client.id)}
          >
            <TableCell>{client.name}</TableCell>
            <TableCell>
              <Badge
                variant="outline"
                style={{
                  backgroundColor: client.type?.color,
                  color: getTextColor(client.type?.color),
                  borderWidth: 3,
                  borderColor: darkenColor(client.type?.color, 30),
                }}
              >
                {client.type?.name}
              </Badge>
            </TableCell>
            {/** Licenses */}
            <TableCell
              onClick={(e) => {
                e.stopPropagation();
                handleRowClick(client.id, "licenses");
              }}
            >
              <Badge variant="secondary" className="text-sm">
                <Key className="h-6 w-6" />
                {client._count.licenses}
              </Badge>
            </TableCell>
            {/** Devices */}
            <TableCell
              onClick={(e) => {
                e.stopPropagation();
                handleRowClick(client.id, "devices");
              }}
            >
              <Badge variant="secondary" className="text-sm">
                <Computer className="h-6 w-6" />
                {client._count.devices}
              </Badge>
            </TableCell>
            {/** City */}
            <TableCell>{client.city}</TableCell>
            <TableCell>
              {dayjs(client.createdAt).format("DD/MM/YYYY")}
            </TableCell>
            <TableCell
              className="text-right"
              onClick={(e) => e.stopPropagation()}
            >
              <TableActions client={client} onDelete={onDelete} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
