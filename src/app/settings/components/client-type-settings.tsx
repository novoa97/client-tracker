"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import {
  Pencil,
  Trash,
  Smartphone,
  Laptop,
  ComputerIcon as Desktop,
  Tablet,
  Watch,
  Tv,
  Server,
  Printer,
  Check,
  CircleX,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableRow, TableCell } from "@/components/ui/table";
import { CardList } from "@/components/card-list";
import { useTranslations } from "next-intl";
import { addDeviceType } from "../actions/add-device-type";
import { useRouter } from "next/navigation";
import { ClientType, DeviceType } from "@/generated/prisma";
import { deleteDeviceType } from "../actions/delete-device-type";
import { editDeviceType } from "../actions/edit-device-type";
import DynamicIcon from "@/components/icon";
import { DeviceTypeWithInUse } from "../actions/get-devices-type";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";
import { DialogContainer } from "@/components/dialog-container";
import { ClientTypeForm, ClientTypeFormValues } from "./client-type-form";
import { ClientTypeWithInUse } from "../actions/get-client-type";
import { addClientType } from "../actions/add-client-type";
import { editClientType } from "../actions/edit-client-type";

interface Props {
  types: ClientTypeWithInUse[];
}

export function ClientTypeSettings({ types }: Props) {
  const [items, setItems] = useState<ClientTypeWithInUse[] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editingClientType, setEditingClientType] = useState<ClientType | null>(
    null
  );
  const t = useTranslations();
  const router = useRouter();

  useEffect(() => {
    setItems(types);
  }, [types]);

  const handleCreate = async (data: ClientTypeFormValues) => {
    try {
      console.log(data);
      const response = await addClientType(data);
      if (response.ok) {
        setIsDialogOpen(false);
        router.refresh();
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (data: ClientTypeFormValues) => {
    console.log(data);
    if (!editingClientType) return;
    await editClientType(editingClientType.key, data);
    setIsDialogOpen(false);
    setEditingClientType(null);
    router.refresh();
  };

  const handleDelete = async (id: string) => {
    await deleteDeviceType(id);
    router.refresh();
    toast(t("Device type deleted"), {
      description: t("The device type has been deleted"),
      duration: 2000,
      icon: <Check className="h-4 w-4 text-green-500" />,
    });
  };

  if (!items) {
    return null;
  }

  return (
    <>
      <CardList
        title={t("Client Types")}
        description={t("Manage client types for your application")}
        buttonText={t("Add Client Type")}
        emptyMessage={t("No client types added yet")}
        headers={[t("Icon"), t("Name")]}
        onCreateClick={() => setIsDialogOpen(true)}
        variant="table"
      >
        {items.map((type) => (
          <TableRow key={type.key}>
            <TableCell>
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ backgroundColor: type.color }}
              >
                <DynamicIcon name={type.icon} className="text-white h-5 w-5" />
              </div>
            </TableCell>
            <TableCell>{type.name}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setEditingClientType(type);
                    setIsDialogOpen(true);
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <Button
                        variant="ghost"
                        size="icon"
                        disabled={type.inUse}
                        onClick={() => handleDelete(type.key)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TooltipTrigger>
                  {type.inUse && (
                    <TooltipContent side="top">
                      {t("This type is in use and cannot be deleted")}
                    </TooltipContent>
                  )}
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </CardList>

      <DialogContainer
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) setEditingClientType(null);
        }}
        title={editingClientType ? t("Edit Client Type") : t("Add Client Type")}
        description={
          editingClientType
            ? t("Edit the client type details")
            : t("Add a new client type to your application")
        }
      >
        {editingClientType ? (
          <ClientTypeForm
            onSubmit={handleEdit}
            isLoading={isLoading}
            defaultValues={editingClientType}
          />
        ) : (
          <ClientTypeForm onSubmit={handleCreate} isLoading={isLoading} />
        )}
      </DialogContainer>
    </>
  );
}
