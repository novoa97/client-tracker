"use client";

import {
  Check,
  ClipboardCheck,
  Computer,
  Copy,
  CopyCheck,
  Globe,
  Hash,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardList } from "@/components/card-list";
import { useTranslations } from "next-intl";
import { DialogContainer } from "@/components/dialog-container";
import { DeviceForm } from "./device-form";
import { useState } from "react";
import { DeviceWithRelations } from "@/app/types";
import DynamicIcon from "@/components/icon";
import { useRouter } from "next/navigation";
import { addDevice } from "../actions/add-device";
import { Client, Device, DeviceType } from "@/generated/prisma";
import { DeviceActions } from "./devices-actions";
import { deleteDevice } from "../actions/delete-device";
import { editDevice } from "../actions/edit-device";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DeviceItem } from "./device-item";

interface Props {
  client: Client;
  devices: DeviceWithRelations[];
  types: DeviceType[];
  onAddDevice?: () => void;
}

export function DevicesList({ client, devices, types }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const [editingDevice, setEditingLicense] = useState<Device | null>(null);
  const [copiedValues, setCopiedValues] = useState<Record<string, boolean>>({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    console.log(data);
    await addDevice(client.id, data);
    setIsDialogOpen(false);
    toast("Copied to clipboard", {
      description: `zdxcsadmnas`,
      duration: 2000,
      icon: <Plus className="w-5 h-5 text-green-500" />,
    });
    router.refresh();
  };

  const handleEdit = async (data: any) => {
    console.log(data);
    if (!editingDevice) return;
    await editDevice(editingDevice.id, data);
    setEditingLicense(null);
    setIsDialogOpen(false);
    router.refresh();
  };

  const handleDelete = async (id: string) => {
    await deleteDevice(id);
    router.refresh();
  };

  const copyToClipboard = (text: string, label: string, deviceId: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        // Show success state
        const key = `${deviceId}-${label}`;
        setCopiedValues({ ...copiedValues, [key]: true });

        // Show toast notification
        toast("Copied to clipboard", {
          description: `${label}: ${text}`,
          duration: 2000,
          icon: <CopyCheck className="w-5 h-5 text-green-500" />,
        });

        // Reset after 2 seconds
        setTimeout(() => {
          setCopiedValues((prev) => ({ ...prev, [key]: false }));
        }, 2000);
      },
      (err) => {
        console.error("Failed to copy", err);
        toast("Copied to clipboard", {
          description: "Could not copy to clipboard",
          duration: 2000,
        });
      }
    );
  };

  const isCopied = (deviceId: string, label: string) => {
    return copiedValues[`${deviceId}-${label}`] || false;
  };

  return (
    <>
      <CardList
        title={t("Devices")}
        description={t("Registered devices for this client")}
        buttonText={t("Add Device")}
        emptyMessage={t("No devices found")}
        onCreateClick={() => setIsDialogOpen(true)}
        variant="list"
      >
        {devices.map((device) => (
          <DeviceItem
            key={device.id}
            device={device}
            copyToClipboard={copyToClipboard}
            isCopied={isCopied}
            handleDelete={handleDelete}
            onEdit={(device) => {
              setEditingLicense(device);
              setIsDialogOpen(true);
            }}
          />
        ))}
      </CardList>
      <DialogContainer
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title={"Add device"}
        description={"Edit device"}
      >
        {" "}
        {editingDevice ? (
          <DeviceForm
            types={types}
            onSubmit={handleEdit}
            isLoading={isLoading}
            defaultValues={editingDevice}
          />
        ) : (
          <DeviceForm
            types={types}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        )}
      </DialogContainer>
    </>
  );
}
