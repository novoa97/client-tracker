"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PlusCircle, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LicenseType } from "@/generated/prisma";
import { LicenseWithRelations } from "@/app/types";
import { useTranslations } from "next-intl";

// Define the schema for sublicense
const sublicenseSchema = z.object({
  id: z.string().min(1, "ID is required"),
  type: z.string().min(1, "Type is required"),
});

// Define the schema for the form
const formSchema = z.object({
  id: z.string().min(1, "ID is required"),
  type: z.string().min(1, "Type is required"),
  subLicenses: z.array(sublicenseSchema),
});

export type LicenseFormValues = z.infer<typeof formSchema>;

interface LicenseFormProps {
  types: LicenseType[];
  onSubmit: (values: LicenseFormValues) => Promise<void>;
  defaultValues?: LicenseWithRelations;
  isSubmitting?: boolean;
  mode?: "create" | "edit";
}

// Update the LicenseForm component to accept the mode prop and change button text accordingly
export function LicenseForm({
  types,
  onSubmit,
  defaultValues = undefined,
  isSubmitting = false,
  mode = "create",
}: LicenseFormProps) {
  const t = useTranslations();
  // Initialize the form
  const form = useForm<LicenseFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: defaultValues?.id || "",
      type: defaultValues?.typeKey || "",
      subLicenses:
        defaultValues?.subLicenses.map((l) => {
          return { id: l.id, type: l.typeKey };
        }) || [],
    },
  });

  // Function to add a new sublicense
  const addSublicense = () => {
    const currentSubLicenses = form.getValues("subLicenses");
    form.setValue("subLicenses", [...currentSubLicenses, { id: "", type: "" }]);
  };

  // Function to remove a sublicense
  const removeSublicense = (index: number) => {
    const currentSubLicenses = form.getValues("subLicenses");
    form.setValue(
      "subLicenses",
      currentSubLicenses.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = async (values: LicenseFormValues) => {
    await onSubmit(values);
  };

  // Determine button text based on mode
  const buttonText =
    mode === "create" ? t("Create License") : t("Update License");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="id"
            disabled={mode === "edit"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("License ID")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("Enter license ID")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("License Type")}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={types.length === 0}
                >
                  <FormControl>
                    <SelectTrigger
                      id="type"
                      name="type"
                      className="w-full"
                      tabIndex={0}
                    >
                      <SelectValue
                        placeholder={
                          types.length === 0
                            ? t("No license types added yet")
                            : t("Select license type")
                        }
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {types.map((type) => (
                      <SelectItem key={type.key} value={type.key}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">{t("Sublicenses")}</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addSublicense}
                className="h-8 gap-1"
              >
                <PlusCircle className="h-4 w-4" />
                <span>{t("Add Sublicense")}</span>
              </Button>
            </div>

            {form.watch("subLicenses").length > 0 ? (
              <div className="space-y-4">
                {form.watch("subLicenses").map((_, index) => (
                  <div key={index} className="rounded-md border p-4 relative">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeSublicense(index)}
                      className="absolute right-2 top-2 h-6 w-6"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove sublicense</span>
                    </Button>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name={`subLicenses.${index}.id`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("Sublicense ID")}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t("Enter sublicense ID")}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`subLicenses.${index}.type`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("Sublicense Type")}</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              disabled={types.length === 0}
                            >
                              <FormControl>
                                <SelectTrigger
                                  id="type"
                                  name="type"
                                  className="w-full"
                                  tabIndex={0}
                                >
                                  <SelectValue placeholder={t("Select type")} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {types.map((type) => (
                                  <SelectItem key={type.key} value={type.key}>
                                    {type.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-md border border-dashed p-6 text-center text-sm text-muted-foreground">
                {t("No sublicenses added yet")}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button type="submit" disabled={isSubmitting || types.length === 0}>
            {isSubmitting
              ? mode === "create"
                ? t("Creating")
                : "Updating..."
              : buttonText}
          </Button>
        </div>
      </form>
    </Form>
  );
}
