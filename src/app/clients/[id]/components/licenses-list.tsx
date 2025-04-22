"use client";

import { MoreVertical, Pencil, Plus, Trash, Trash2 } from "lucide-react";
import { CardList } from "@/components/card-list";
import { use, useState } from "react";
import { DialogContainer } from "@/components/dialog-container";
import { LicenseForm, LicenseFormValues } from "./license-form";
import { Client, License, LicenseType } from "@/generated/prisma";
import { LicenseWithRelations } from "@/app/types";
import { addLicense } from "../actions/add-license";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { TableActions } from "../../components/table/table-actions";
import { LicenseActions } from "./license-actions";
import { deleteLicense } from "../actions/delete-license";

interface Props {
  client: Client;
  types: LicenseType[];
  licenses: LicenseWithRelations[];
}

export function LicensesList({ types, licenses, client }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingLicense, setEditingLicense] =
    useState<LicenseWithRelations | null>(null);

  const dialogTitle = "Create New License";
  const dialogDescription =
    "Fill in the details to create a new license. Add sublicenses as needed.";

  const handleSubmit = async (values: LicenseFormValues) => {
    setIsSubmitting(true);

    try {
      // Default behavior if no custom submit handler is provided
      console.log("License created:", values);
      await addLicense({
        id: values.id,
        type: values.type,
        clientId: client.id,
        subLicenses: values.sublicenses,
      });
      setIsDialogOpen(false);
      router.refresh();
    } catch (error) {
      console.error("Error creating license:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string): Promise<void> => {
    await deleteLicense(id);
    router.refresh();
  };

  return (
    <>
      <CardList
        title={t("Licenses")}
        description={t("All licenses associated with this client")}
        buttonText={t("Add License")}
        emptyMessage={t("No licenses found")}
        onCreateClick={() => {
          setEditingLicense(null);
          setIsDialogOpen(true);
        }}
        variant="list"
      >
        {licenses.map((license) => (
          <div
            key={license.id}
            className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0"
          >
            <div>
              <h3 className="font-medium">{license.type.name}</h3>
              <p className="text-sm text-muted-foreground">ID: {license.id}</p>
            </div>
            <LicenseActions license={license} onDelete={handleDelete} />
          </div>
        ))}
      </CardList>
      <DialogContainer
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title={dialogTitle}
        description={dialogDescription}
      >
        {" "}
        {editingLicense ? (
          <LicenseForm
            types={types}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            defaultValues={editingLicense}
            mode="edit"
          />
        ) : (
          <LicenseForm
            types={types}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </DialogContainer>
    </>
  );
}
