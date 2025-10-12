"use client";
import { useState } from "react";
import { DialogContainer } from "@/components/dialog-container";
import { LicenseForm, LicenseFormValues } from "./license-form";
import { LicenseType } from "@/generated/prisma";
import { LicenseWithRelations } from "@/app/types";
import { addLicense, editLicense, deleteLicense } from "../actions";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { SublicensesList } from "./sublicenses-dialog";
import { Check, CircleX, Key, Trash } from "lucide-react";
import { ClientPage } from "../../components/client-page";
import { LicenseItem } from "./license-item";

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
      <ClientPage
        title={t("Licenses")}
        subtitle={t("All licenses associated with this client")}
        empty={licenses.length === 0}
        emptyMessage={t("No licenses found")}
        emptyIcon={<Key />}
        addAction={() => {
          setEditingLicense(null);
          setIsDialogOpen(true);
        }}
        onBackClick={() => router.push("/clients/" + clientId)}
        // variant="list
      >
        <div className="flex flex-col h-full gap-2 overflow-y-auto">
          {licenses.map((license) => (
            <LicenseItem
              key={license.id}
              license={license}
              selectLicense={() => {
                setSelectedLicense(license);
                setIsSubLicensesDialogOpen(true);
              }}
              editLicense={() => {
                setEditingLicense(license);
                setIsDialogOpen(true);
              }}
              deleteLicense={() => handleDelete(license.id)}
            />
          ))}
        </div>
      </ClientPage>
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
