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
import { Client } from "@/generated/prisma";

const clientSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  legalName: z
    .string()
    .min(2, "La razón social debe tener al menos 2 caracteres"),
  taxId: z.string().min(1, "CIF / VAT es obligatorio"),
  address: z.string().min(1, "La dirección es obligatoria"),
});

export type EditClientFormValues = z.infer<typeof clientSchema>;

interface EditClientFormProps {
  defaultValues: Client;
  onSubmit: (
    values: EditClientFormValues & {
      latitude: number;
      longitude: number;
      city: string;
    }
  ) => void;
  onCancel?: () => void;
  isLoading?: boolean;
}

export function EditClientForm({
  defaultValues,
  onSubmit,
  onCancel,
  isLoading,
}: EditClientFormProps) {
  const t = useTranslations();
  const form = useForm<EditClientFormValues>({
    resolver: zodResolver(clientSchema),
    defaultValues,
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
        className="space-y-4"
      >
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
        <div className="flex justify-end gap-2">
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancelar
            </Button>
          )}
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Guardando..." : "Guardar"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
