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
import { Client } from "@/generated/prisma";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

type Props = {
  clients: Client[];
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
          <TableHead>{t("Tax ID")}</TableHead>
          <TableHead>{t("City")}</TableHead>
          <TableHead>{t("Created At")}</TableHead>
          <TableHead className="text-right">{t("Actions")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clients.map((client) => (
          <TableRow
            key={client.id}
            onClick={() => handleRowClick(client.id)}
            className="cursor-pointer hover:bg-muted"
          >
            <TableCell>{client.name}</TableCell>
            <TableCell>{client.taxId}</TableCell>
            <TableCell>{client.city}</TableCell>
            <TableCell>
              {new Date(client.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell className="text-right">
              <TableActions client={client} onDelete={onDelete} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
