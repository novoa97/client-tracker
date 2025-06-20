"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AddressAutocomplete from "@/components/address-autocomplete";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Client, ClientType } from "@/generated/prisma";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Select } from "@/components/ui/select";

const clientSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  type: z.string().min(1, "El tipo de cliente es obligatorio"),
  legalName: z
    .string()
    .min(2, "La razón social debe tener al menos 2 caracteres"),
  taxId: z.string().min(1, "CIF / VAT es obligatorio"),
  address: z.string().min(1, "La dirección es obligatoria"),
  referenceCode: z.string().optional(),
});

export type EditClientFormValues = z.infer<typeof clientSchema>;

interface EditClientFormProps {
  defaultValues: Client;
  types: ClientType[];
  onSubmit: (
    values: EditClientFormValues & {
      latitude: number;
      longitude: number;
      city: string;
    }
  ) => void;
  isLoading?: boolean;
}

export function EditClientForm({
  defaultValues,
  types,
  onSubmit,
  isLoading,
}: EditClientFormProps) {
  const t = useTranslations();
  const form = useForm<EditClientFormValues>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      type: defaultValues.typeKey,
      legalName: defaultValues.legalName || "",
      taxId: defaultValues.taxId || "",
      name: defaultValues.name,
      address: defaultValues.address,
      referenceCode: defaultValues.referenceCode || "",
    },
  });

  const [coords, setCoords] = useState<{
    latitude: number;
    longitude: number;
    city: string;
  }>({
    latitude: defaultValues.latitude,
    longitude: defaultValues.longitude,
    city: defaultValues.city,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) =>
          onSubmit({ ...values, ...coords })
        )}
        className="space-y-8"
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("Name")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("Name")} {...field} />
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
                <FormLabel>{t("Type")}</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={types.length === 0}
                  >
                    <SelectTrigger className="w-full" tabIndex={0}>
                      <SelectValue placeholder={t("Select a type")} />
                    </SelectTrigger>
                    <SelectContent>
                      {types.map((type) => (
                        <SelectItem key={type.key} value={type.key}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="legalName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("Legal Name")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("Legal Name")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="taxId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("VAT")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("VAT")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <AddressAutocomplete
                    value={field.value}
                    onChange={field.onChange}
                    onSelect={(address, lat, lng, city) => {
                      field.onChange(address);
                      setCoords({ latitude: lat, longitude: lng, city: city });
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="referenceCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("Reference Code")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("Reference Code")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Guardando..." : "Guardar"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
