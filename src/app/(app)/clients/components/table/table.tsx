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
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

import dayjs from "dayjs";
import { ClientWithTypeAndCount } from "@/app/types";
import { Badge } from "@/components/ui/badge";
import { darkenColor, getTextColor } from "@/lib/colors";
import { ArrowUp, ArrowDown, ArrowUpDown, Computer, Key } from "lucide-react";

type SortField =
  | "name"
  | "type"
  | "licenses"
  | "devices"
  | "city"
  | "createdAt";

type Props = {
  clients: ClientWithTypeAndCount[];
  onDelete: (id: string) => Promise<void>;
};

export function ClientTable({ clients, onDelete }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentOrder = searchParams.get("order") || "";
  const currentField = currentOrder.startsWith("-")
    ? currentOrder.substring(1)
    : currentOrder || null;
  const currentDirection = currentOrder.startsWith("-") ? "desc" : "asc";

  const handleRowClick = (id: string, path?: "licenses" | "devices") => {
    if (path) {
      router.push(`/clients/${id}/${path}`);
    } else {
      router.push(`/clients/${id}`);
    }
  };

  const handleSort = (field: SortField) => {
    const params = new URLSearchParams(searchParams);

    if (currentField === field) {
      // Same field, toggle direction
      const newOrder = currentDirection === "asc" ? `-${field}` : field;
      params.set("order", newOrder);
    } else {
      // New field, set to ascending
      params.set("order", field);
    }

    // Reset to first page when sorting
    params.delete("page");

    router.push(`/clients?${params.toString()}`);
  };

  const getSortIcon = (field: SortField) => {
    if (currentField !== field) {
      return <ArrowUpDown className="h-4 w-4 ml-1 opacity-50" />;
    }
    return currentDirection === "asc" ? (
      <ArrowUp className="h-4 w-4 ml-1" />
    ) : (
      <ArrowDown className="h-4 w-4 ml-1" />
    );
  };

  const SortableTableHead = ({
    field,
    children,
  }: {
    field: SortField;
    children: React.ReactNode;
  }) => (
    <TableHead
      className="cursor-pointer hover:bg-muted select-none"
      onClick={() => handleSort(field)}
    >
      <div className="flex items-center">
        {children}
        {getSortIcon(field)}
      </div>
    </TableHead>
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <SortableTableHead field="name">{t("Name")}</SortableTableHead>
          <SortableTableHead field="type">{t("Type")}</SortableTableHead>
          <SortableTableHead field="licenses">
            {t("Licenses")}
          </SortableTableHead>
          <SortableTableHead field="devices">{t("Devices")}</SortableTableHead>
          <SortableTableHead field="city">{t("City")}</SortableTableHead>
          <SortableTableHead field="createdAt">
            {t("Created At")}
          </SortableTableHead>
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
