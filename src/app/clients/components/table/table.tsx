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
import { ClientWithType } from "@/app/types";
import { Badge } from "@/components/ui/badge";
type Props = {
  clients: ClientWithType[];
  onDelete: (id: string) => Promise<void>;
};

export function ClientTable({ clients, onDelete }: Props) {
  const t = useTranslations();
  const router = useRouter();

  const handleRowClick = (id: string) => {
    router.push(`/clients/${id}`);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t("Name")}</TableHead>
          <TableHead>{t("Type")}</TableHead>
          <TableHead>{t("VAT")}</TableHead>
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
                style={{ backgroundColor: client.type?.color, color: "white" }}
              >
                {client.type?.name}
              </Badge>
            </TableCell>
            <TableCell>{client.taxId}</TableCell>
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
