"use client";

import { useEffect, useState } from "react";
import { Pencil, Trash, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableRow, TableCell } from "@/components/ui/table";
import { CardList } from "@/components/card-list";
import { useTranslations } from "next-intl";
import {
  DeviceTypeWithInUse,
  addDeviceType,
  editDeviceType,
  deleteDeviceType,
} from "../actions";
import { useRouter } from "next/navigation";
import { DeviceType } from "@/generated/prisma";
import DynamicIcon from "@/components/icon";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";
import { DialogContainer } from "@/components/dialog-container";
import { DeviceTypeForm } from "./device-type-form";

interface Props {
  types: DeviceTypeWithInUse[];
}

export function DeviceTypesCard({ types }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const [items, setItems] = useState<DeviceTypeWithInUse[] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingDevice, setEditingDevice] = useState<DeviceType | null>(null);

  useEffect(() => {
    setItems(types);
  }, [types]);

  const handleCreate = async (data: { name: string; icon: string }) => {
    try {
      const response = await addDeviceType(data);
      if (response.ok) {
        setIsDialogOpen(false);
        router.refresh();
      } else {
        toast.error(t("Error creating device type"), {
          description: t(response.message),
          duration: 3000,
        });
      }
    } catch (error) {
      toast.error(t("Error creating device type"), {
        description: t("There was a problem creating the device type"),
        duration: 3000,
      });
    }
  };

  const handleEdit = async (data: { name: string; icon: string }) => {
    if (!editingDevice) return;
    await editDeviceType(editingDevice.key, data);
    setIsDialogOpen(false);
    setTimeout(() => setEditingDevice(null), 100);
    router.refresh();
    toast.success(t("Device type updated"), {
      description: t("Device type updated description"),
      duration: 2000,
    });
  };

  const handleDelete = async (id: string) => {
    await deleteDeviceType(id);
    router.refresh();
    toast.success(t("Device type deleted"), {
      description: t("Device type deleted description"),
      duration: 2000,
    });
  };

  if (!items) {
    return null;
  }

  return (
    <>
      <CardList
        title={t("Device Types")}
        description={t("Manage device types for your application")}
        buttonText={t("Add Device Type")}
        emptyMessage={t("No device types added yet")}
        headers={[t("Icon"), t("Name")]}
        onCreateClick={() => setIsDialogOpen(true)}
        variant="table"
      >
        {items.map((type) => (
          <TableRow key={type.key}>
            <TableCell>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                <DynamicIcon name={type.icon} className="h-5 w-5" />
              </div>
            </TableCell>
            <TableCell>{type.name}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setEditingDevice(type);
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
          if (!open) setTimeout(() => setEditingDevice(null), 100);
        }}
        title={editingDevice ? t("Edit Device Type") : t("Add Device Type")}
        description={
          editingDevice
            ? t("Edit Device Type description")
            : t("Add Device Type description")
        }
      >
        <DeviceTypeForm
          onSubmit={editingDevice ? handleEdit : handleCreate}
          defaultValues={editingDevice}
        />
      </DialogContainer>
    </>
  );
}
