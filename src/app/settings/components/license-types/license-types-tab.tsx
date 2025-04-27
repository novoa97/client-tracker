"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { TableRow, TableCell } from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";
import { CardList } from "@/components/card-list";
import { LicenseType } from "@/generated/prisma";
import { useTranslations } from "next-intl";
import { LicenseWithInUse } from "../../actions/get-licenses-type";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DialogContainer } from "@/components/dialog-container";
import { LicenseTypeForm } from "./license-type-form";
import { editLicenseType } from "../../actions/edit-license-type";
import { toast } from "sonner";
import { addLicenseType } from "../../actions/add-license-type";
import { deleteLicenseType } from "../../actions/delete-license-type";

interface Props {
  types: LicenseWithInUse[];
}

export function LicenseTypesTab({ types }: Props) {
  const t = useTranslations();
  const [licenses, setLicenses] = useState<LicenseWithInUse[] | null>(null);
  const [licenseType, setLicenseType] = useState<LicenseType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLicenses(types);
  }, [types]);

  /**
   * Handles the creation of a new license type
   * @param data - The name of the license type
   */
  const handleCreate = async (data: { name: string }) => {
    setIsLoading(true);
    const response = await addLicenseType(data.name);
    if (response.ok) {
      setIsLoading(false);
      setIsDialogOpen(false);
      router.refresh();
      toast.success(t("License type created"), {
        description: t("License type created description"),
        duration: 2000,
      });
    } else {
      setIsLoading(false);
      toast.error(t("License type creation failed"), {
        description: t(response.message),
        duration: 2000,
      });
    }
  };

  /**
   * Handles the editing of a license type
   * @param data - The name of the license type
   */
  const handleEdit = (data: { name: string }) => {
    try {
      setIsLoading(true);
      if (licenseType) {
        editLicenseType(licenseType.key, data.name);
      }
      setIsLoading(false);
      setIsDialogOpen(false);
      router.refresh();
      toast.success(t("License type updated"), {
        description: t("License type updated description"),
        duration: 2000,
      });
    } catch (error) {
      toast.error(t("License type update failed"), {
        description: t("License type update failed description"),
        duration: 2000,
      });
    }
  };

  /**
   * Handles the deletion of a license type
   * @param key - The key of the license type
   */
  const handleDelete = async (key: string) => {
    try {
      await deleteLicenseType(key);
      toast.success(t("License type deleted"), {
        description: t("License type deleted description"),
        duration: 2000,
      });
      router.refresh();
    } catch (error) {
      toast.error(t("License type deletion failed"), {
        description: t("License type deletion failed description"),
        duration: 2000,
      });
    }
  };

  if (!licenses) {
    return null;
  }

  return (
    <>
      <CardList
        title={t("License Types")}
        description={t("Manage license types for your application")}
        buttonText={t("Add License Type")}
        emptyMessage={t("No license types added yet")}
        headers={[t("Name")]}
        onCreateClick={() => setIsDialogOpen(true)}
        variant="table"
      >
        {licenses.map((license) => (
          <TableRow key={license.key}>
            <TableCell>{license.name}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setLicenseType(license);
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
                        disabled={license.inUse}
                        onClick={() => handleDelete(license.key)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TooltipTrigger>
                  {license.inUse && (
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
        title={licenseType ? t("Edit License Type") : t("Create License Type")}
        description={
          licenseType
            ? t("Edit License Type description")
            : t("Add License Type description")
        }
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) setTimeout(() => setLicenseType(null), 100);
        }}
      >
        {licenseType ? (
          <LicenseTypeForm
            onSubmit={handleEdit}
            isLoading={isLoading}
            defaultValues={licenseType}
          />
        ) : (
          <LicenseTypeForm onSubmit={handleCreate} isLoading={isLoading} />
        )}
      </DialogContainer>
    </>
  );
}
