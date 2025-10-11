"use client";

import { ClientWithType } from "@/app/types";
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

interface Props {
  client: ClientWithType;
  types: ClientType[];
  className?: string;
}

const navItems = [
  { href: "", label: "Mapa", icon: Map, mobile: false },
  { href: "/notes", label: "Notas", icon: FileText, mobile: true },
  { href: "/devices", label: "Devices", icon: Computer, mobile: true },
  { href: "/licenses", label: "Licencias", icon: Key, mobile: true },
  //   { href: "/incidents", label: "Incidencias", icon: AlertCircle, mobile: true },
];

export function ClientSidebar({ client, types, className }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = async (data: EditClientData) => {
    await editClient(client.id, data);
    setIsEditing(false);

    console.log("Client updated successfully");

    toast.success(t("Client updated successfully"), {
      duration: 2000,
    });

    router.refresh();
  };

  return (
    <>
      <div
        style={{
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        }}
        className={cn(
          "flex flex-col h-full w-3/10 bg-white  border-r p-8 space-y-2 shadow-lg",
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
                    <Icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
        {/** Edit button */}
        <div className="h-10">
          <Button
            variant="default"
            className="w-full"
            onClick={() => setIsEditing(true)}
          >
            <Pencil className="mr-2 h-4 w-4" />
            {t("Edit")}
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
  icon: any;
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
