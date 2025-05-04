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
import { Check, CircleX, Trash } from "lucide-react";

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

  /**
   * Handles the submission of a new license
   * @param values - The values of the license to be created
   */
  const handleSubmit = async (values: LicenseFormValues) => {
    setIsLoading(true);
    try {
      const response = await addLicense(clientId, values);
      if (response.ok) {
        setIsDialogOpen(false);
        router.refresh();
        toast.success(t("License created successfully"), {
          duration: 2000,
          icon: <Check className="h-4 w-4 text-green-500" />,
        });
      } else {
        toast.error(t(response.message), {
          duration: 2000,
          icon: <CircleX className="h-4 w-4 text-red-500" />,
        });
      }
    } catch (error) {
      console.error("Error creating license:", error);
      toast.error(t("Error creating license"), {
        duration: 2000,
        icon: <CircleX className="h-4 w-4 text-red-500" />,
      });
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handles the submission of an edited license
   * @param values - The values of the license to be edited
   */
  const handleEdit = async (values: LicenseFormValues): Promise<void> => {
    if (!editingLicense) return;
    setIsLoading(true);
    try {
      const response = await editLicense(editingLicense.id, values);
      if (response.ok) {
        toast.success(t("License edited successfully"), {
          duration: 2000,
          icon: <Check className="h-4 w-4 text-green-500" />,
        });
        setIsDialogOpen(false);
        setEditingLicense(null);
        router.refresh();
      } else {
        toast.error(t(response.message), {
          duration: 2000,
          icon: <CircleX className="h-4 w-4 text-red-500" />,
        });
      }
    } catch (error) {
      console.error("Error editing license:", error);
      toast.error(t("Error editing license"), {
        duration: 2000,
        icon: <CircleX className="h-4 w-4 text-red-500" />,
      });
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handles the deletion of a license
   * @param id - The id of the license to be deleted
   */
  const handleDelete = async (id: string): Promise<void> => {
    try {
      await deleteLicense(id);
      toast.success(t("License deleted successfully"), {
        duration: 2000,
        icon: <Trash className="h-4 w-4 text-green-500" />,
      });
      router.refresh();
    } catch (error) {
      console.error("Error deleting license:", error);
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
