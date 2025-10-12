"use client";

import { ClientWithTypeAndOpenIncidents } from "@/app/types";
import DynamicIcon from "@/components/icon";
import { darkenColor, getTextColor } from "@/lib/colors";
import {
  Building,
  Map,
  MapPin,
  Hash,
  FileText,
  Calendar,
  Computer,
  Pencil,
  Trash,
  LucideIcon,
  AlertCircle,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";
import { DialogContainer } from "@/components/dialog-container";
import { useState } from "react";
import { editClient, EditClientData } from "../actions";
import { ClientEdit } from "./client-edit";
import { ClientType } from "@/generated/prisma";
import dayjs from "dayjs";
import { toast } from "sonner";
import { PageHeader } from "@/components/page-header";
import { deleteClient } from "../../actions/delete-client";
import { ClientDelete } from "./client-delete";
import { Badge } from "@/components/ui/badge";

interface Props {
  client: ClientWithTypeAndOpenIncidents;
  types: ClientType[];
  className?: string;
}

const navItems = [
  { href: "", label: "Map", icon: Map, mobile: false },
  { href: "/notes", label: "Notes", icon: FileText, mobile: true },
  { href: "/devices", label: "Devices", icon: Computer, mobile: true },
  { href: "/licenses", label: "Licenses", icon: Key, mobile: true },
  { href: "/incidents", label: "Incidents", icon: AlertCircle, mobile: true },
];

export function ClientSidebar({ client, types, className }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleSubmit = async (data: EditClientData) => {
    await editClient(client.id, data);
    setIsEditing(false);

    console.log("Client updated successfully");

    toast.success(t("Client updated successfully"), {
      duration: 2000,
    });

    router.refresh();
  };

  const handleDelete = async () => {
    await deleteClient(client.id);

    toast.success(t("Client deleted successfully"), {
      duration: 2000,
    });

    router.push("/clients");
  };

  return (
    <>
      <PageHeader title="Client" icon={"user"}>
        <Button
          className="hidden md:flex"
          size="sm"
          variant="default"
          onClick={() => setIsEditing(true)}
        >
          <Pencil className="mr-2 h-4 w-4" />
          {t("Edit")}
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => setIsDeleting(true)}
        >
          <Trash className="mr-2 h-4 w-4" />
          {t("Delete")}
        </Button>
      </PageHeader>
      <div
        style={{
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        }}
        className={cn(
          "flex flex-col h-full w-3/10 bg-white  border-r p-8 space-y-2 shadow-lg overflow-y-auto",
          className
        )}
      >
        {/* Header */}
        <div className="flex flex-row gap-3 items-center border-b pb-6">
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
            <p className="text-lg font-medium">{client.name}</p>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <p className="text-sm">{client.city}</p>
            </div>
          </div>
        </div>
        {/* Client info */}
        <div className="flex flex-col gap-4 pt-2 border-b pb-4">
          <p className="text-xs font-medium text-muted-foreground uppercase">
            {t("Information")}
          </p>
          <div className="flex flex-col gap-3">
            {/** Legal Name */}
            <InfoItem
              label={t("Legal Name")}
              value={client.legalName}
              icon={Building}
            />
            {/** VAT */}
            <InfoItem label={t("VAT")} value={client.taxId} icon={FileText} />
            {/** Reference Code */}
            {client.referenceCode && (
              <InfoItem
                label={t("Reference Code")}
                value={client.referenceCode}
                icon={Hash}
              />
            )}
            {/** Created at */}
            <InfoItem
              label={t("Created At")}
              value={dayjs(client.createdAt).format("DD-MM-YYYY")}
              icon={Calendar}
            />
            {/** Address */}
            <InfoItem
              label={t("Address")}
              value={client.address}
              icon={MapPin}
            />
          </div>
        </div>
        {/* Navigation */}
        <div className="flex-1 flex flex-col gap-4 pt-2 pb-4">
          <p className="text-xs font-medium text-muted-foreground uppercase">
            {t("Sections")}
          </p>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const href = `/clients/${client.id}${item.href}`;
              const isActive = pathname === href;
              const Icon = item.icon;

              return (
                <Link key={item.href} href={href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      !item.mobile && "hidden md:flex",
                      "w-full justify-start",
                      isActive && "bg-muted font-medium"
                    )}
                  >
                    <div className="flex flex-row gap-2 items-center justify-between w-full">
                      <div className="flex flex-row gap-2 items-center">
                        <Icon className="mr-2 h-4 w-4" />
                        {t(item.label)}
                      </div>
                      {item.href === "/incidents" && (
                        <Badge variant="secondary" className="text-xs">
                          {client._count.incidents}
                        </Badge>
                      )}
                    </div>
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
        {/** Edit button */}
        <div className="h-10 md:hidden flex flex-col gap-2 my-4">
          <Button
            variant="default"
            className="w-full"
            onClick={() => setIsEditing(true)}
          >
            <Pencil className="mr-2 h-4 w-4" />
            {t("Edit")}
          </Button>
          <Button
            variant="destructive"
            className="w-full"
            onClick={() => setIsDeleting(true)}
          >
            <Trash className="mr-2 h-4 w-4" />
            {t("Delete")}
          </Button>
        </div>
      </div>
      <DialogContainer
        open={isEditing}
        onOpenChange={setIsEditing}
        title={t("Edit Client Info")}
      >
        <ClientEdit
          types={types}
          defaultValues={client}
          onSubmit={handleSubmit}
          isLoading={false}
        />
      </DialogContainer>
      <DialogContainer
        open={isDeleting}
        onOpenChange={setIsDeleting}
        title={t("Delete Client")}
      >
        <ClientDelete onSubmit={handleDelete} isLoading={isDeleting} />
      </DialogContainer>
    </>
  );
}

function InfoItem({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex items-center flex-row align-middle gap-2">
      <div>
        <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center">
          <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        </div>
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}
