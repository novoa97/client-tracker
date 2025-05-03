"use client";
import { CardList } from "@/components/card-list";
import { useState } from "react";
import { DialogContainer } from "@/components/dialog-container";
import { LicenseForm, LicenseFormValues } from "./license-form";
import { LicenseType } from "@/generated/prisma";
import { LicenseWithRelations } from "@/app/types";
import { addLicense, editLicense, deleteLicense } from "../actions";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { LicenseActions } from "./license-actions";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { SublicensesList } from "./sublicenses-dialog";

interface Props {
  clientId: string;
  types: LicenseType[];
  licenses: LicenseWithRelations[];
}

export function LicensesList({ types, licenses, clientId }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubLicensesDialogOpen, setIsSubLicensesDialogOpen] = useState(false);
  const [selectedLicense, setSelectedLicense] =
    useState<LicenseWithRelations | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [editingLicense, setEditingLicense] =
    useState<LicenseWithRelations | null>(null);

  const handleSubmit = async (values: LicenseFormValues) => {
    setIsLoading(true);
    try {
      const response = await addLicense({
        id: values.id,
        type: values.type,
        clientId: clientId,
        subLicenses: values.subLicenses,
      });
      if (response.ok) {
        setIsDialogOpen(false);
        router.refresh();
        toast.success(t("License created successfully"));
      } else {
        toast.error(t(response.message));
      }
    } catch (error) {
      console.error("Error creating license:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string): Promise<void> => {
    await deleteLicense(id);
    toast.success(t("License deleted successfully"));
    router.refresh();
  };

  const handleEdit = async (values: LicenseFormValues): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await editLicense(values);
      if (response.ok) {
        toast.success(t("License edited successfully"));
        setIsDialogOpen(false);
        setEditingLicense(null);
        router.refresh();
      } else {
        toast.error(t(response.message));
      }
    } catch (error) {
      console.error("Error editing license:", error);
    } finally {
      setIsLoading(false);
    }
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
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{license.type.name}</h3>
                {license.subLicenses && license.subLicenses.length > 0 && (
                  <Badge
                    variant="outline"
                    className="text-xs cursor-pointer"
                    onClick={() => {
                      setSelectedLicense(license);
                      setIsSubLicensesDialogOpen(true);
                    }}
                  >
                    {license.subLicenses.length} {t("Sublicenses")}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">ID: {license.id}</p>
            </div>
            <LicenseActions
              license={license}
              onDelete={() => handleDelete(license.id)}
              onEdit={() => {
                setEditingLicense(license);
                setIsDialogOpen(true);
              }}
            />
          </div>
        ))}
      </CardList>
      {/* License Dialog */}
      <DialogContainer
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title={editingLicense ? t("Edit License") : t("Create New License")}
        description={
          editingLicense
            ? t("Edit the license details")
            : t("Fill in the details to create a new license")
        }
      >
        {" "}
        {editingLicense ? (
          <LicenseForm
            types={types}
            onSubmit={handleEdit}
            isSubmitting={isLoading}
            defaultValues={editingLicense}
            mode="edit"
          />
        ) : (
          <LicenseForm
            types={types}
            onSubmit={handleSubmit}
            isSubmitting={isLoading}
          />
        )}
      </DialogContainer>
      {/* Sub Licenses Dialog */}
      <DialogContainer
        open={isSubLicensesDialogOpen}
        onOpenChange={setIsSubLicensesDialogOpen}
        title={t("Sublicenses")}
        description={t("All sublicenses associated with this license")}
      >
        <SublicensesList license={selectedLicense} />
      </DialogContainer>
    </>
  );
}
