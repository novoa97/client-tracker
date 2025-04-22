"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TableRow, TableCell } from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";
import { CardList } from "@/components/card-list";
import { LicenseType } from "@/generated/prisma";
import { useTranslations } from "next-intl";
import { LicenseWithInUse } from "../actions/get-licenses-type";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const licenseFormSchema = z.object({
  name: z.string().min(2, {
    message: "License name must be at least 2 characters.",
  }),
});

type LicenseFormValues = z.infer<typeof licenseFormSchema>;

interface Props {
  types: LicenseWithInUse[];
  createLicense: (name: string) => void;
  deleteLicense: (key: string) => void;
}

export function LicenseTypeSettings({
  types,
  createLicense,
  deleteLicense,
}: Props) {
  const t = useTranslations();
  const [licenses, setLicenses] = useState<LicenseWithInUse[] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingLicense, setEditingLicense] = useState<LicenseType | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLicenses(types);
  }, [types]);

  const createForm = useForm<LicenseFormValues>({
    resolver: zodResolver(licenseFormSchema),
    defaultValues: { name: "" },
  });

  const editForm = useForm<LicenseFormValues>({
    resolver: zodResolver(licenseFormSchema),
    defaultValues: { name: "" },
  });

  const handleCreate = (data: LicenseFormValues) => {
    setIsLoading(true);
    createLicense(data.name);
    setIsLoading(false);
    setIsDialogOpen(false);
    router.refresh();
  };

  const handleEdit = (data: LicenseFormValues) => {
    editForm.reset();
  };

  const handleDelete = async (key: string) => {
    await deleteLicense(key);
    router.refresh();
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
                    editForm.setValue("name", license.name);
                    setEditingLicense(license);
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

      {/* Crear licencia */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("Create License Type")}</DialogTitle>
            <DialogDescription>
              {t("Add a new license type to your application")}
            </DialogDescription>
          </DialogHeader>
          <Form {...createForm}>
            <form
              onSubmit={createForm.handleSubmit(handleCreate)}
              className="space-y-4"
            >
              <FormField
                control={createForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Name")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("Enter license type name")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  {t("Cancel")}
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Creating..." : t("Create")}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Editar licencia */}
      <Dialog
        open={!!editingLicense}
        onOpenChange={() => setEditingLicense(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("Create License Type")}</DialogTitle>
            <DialogDescription>
              Modify the license type and save changes.
            </DialogDescription>
          </DialogHeader>
          <Form {...editForm}>
            <form
              onSubmit={editForm.handleSubmit(handleEdit)}
              className="space-y-4"
            >
              <FormField
                control={editForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter license type name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEditingLicense(null)}
                >
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
