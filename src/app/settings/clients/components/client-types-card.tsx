"use client";

import { useEffect, useState } from "react";
import { Pencil, Trash, Check, CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableRow, TableCell } from "@/components/ui/table";
import { CardList } from "@/components/card-list";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ClientType } from "@/generated/prisma";
import DynamicIcon from "@/components/icon";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";
import { DialogContainer } from "@/components/dialog-container";
import { ClientTypeForm, ClientTypeFormValues } from "./client-type-form";
import {
  ClientTypeWithInUse,
  addClientType,
  editClientType,
  deleteClientType,
} from "../actions";
import { darkenColor } from "@/lib/colors";

interface Props {
  types: ClientTypeWithInUse[];
}

export function ClientTypesCard({ types }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const [items, setItems] = useState<ClientTypeWithInUse[] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editingClientType, setEditingClientType] = useState<ClientType | null>(
    null
  );

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
        toast.success(t("Client type created"), {
          description: t("Client type created description"),
          duration: 2000,
          icon: <Check className="h-4 w-4 text-green-500" />,
        });
      } else {
        toast.error(t("Client type creation failed"), {
          description: t(response.message),
          duration: 2000,
          icon: <CircleX className="h-4 w-4 text-red-500" />,
        });
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
    toast(t("Client type updated"), {
      description: t("Client type updated description"),
      duration: 2000,
      icon: <Check className="h-4 w-4 text-green-500" />,
    });
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteClientType(id);
      router.refresh();
      toast(t("Client type deleted"), {
        description: t("Client type deleted description"),
        duration: 2000,
        icon: <Check className="h-4 w-4 text-green-500" />,
      });
    } catch (error) {
      console.log(error);
    }
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
                style={{
                  backgroundColor: type.color,
                  borderWidth: 3,
                  borderColor: darkenColor(type?.color, 30),
                }}
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
