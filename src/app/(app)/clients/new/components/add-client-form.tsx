"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import AddressAutocomplete from "@/components/address-autocomplete";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ClientType } from "@/generated/prisma";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Select } from "@/components/ui/select";

const schema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  legalName: z.string().min(1, "La razón social es obligatoria"),
  taxId: z.string().min(1, "El CIF es obligatorio"),
  address: z.string().min(1, "La dirección es obligatoria"),
  city: z.string().min(1, "La ciudad es obligatoria"),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  type: z.string().min(1, "El tipo de cliente es obligatorio"),
  referenceCode: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

type Props = {
  onSubmit: (data: FormData) => Promise<void>;
  onChange?: (data: {
    latitude: number;
    longitude: number;
    type?: ClientType;
  }) => void;
  clientTypes: ClientType[];
};

export default function AddClientForm({
  onSubmit,
  onChange,
  clientTypes,
}: Props) {
  const t = useTranslations();
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      legalName: "",
      taxId: "",
      address: "",
      city: "",
      latitude: 0,
      longitude: 0,
      type: "",
      referenceCode: "",
    },
  });

  const lat = form.watch("latitude");
  const lng = form.watch("longitude");

  const handleFormSubmit = async (data: FormData) => {
    await onSubmit(data);

    toast.success(t("Client created successfully"), {
      description: t("Client created successfully description"),
      duration: 3000,
    });

    router.push("/clients");
  };

  return (
    <Card className="w-full md:w-1/2 h-full">
      <CardContent className="flex flex-col space-y-4 pt-6 h-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleFormSubmit)}
            className="flex flex-col h-full space-y-4"
          >
            <div className="flex-1 space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="name">{t("Name")}</Label>
                    <FormControl>
                      <Input id="name" {...field} />
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
                    <Label htmlFor="type">{t("Type")}</Label>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          form.setValue("type", value);
                          if (onChange)
                            onChange({
                              latitude: lat,
                              longitude: lng,
                              type:
                                clientTypes.find(
                                  (type) => type.key === value
                                ) ?? undefined,
                            });
                        }}
                        defaultValue={field.value}
                        disabled={clientTypes.length === 0}
                      >
                        <SelectTrigger className="w-full" tabIndex={0}>
                          <SelectValue placeholder={t("Select a type")} />
                        </SelectTrigger>
                        <SelectContent>
                          {clientTypes.map((type) => (
                            <SelectItem key={type.key} value={type.key}>
                              {type.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="legalName"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="legalName">{t("Legal Name")}</Label>
                    <FormControl>
                      <Input id="legalName" {...field} />
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
                    <Label htmlFor="taxId">{t("VAT")}</Label>
                    <FormControl>
                      <Input id="taxId" {...field} />
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
                    <AddressAutocomplete
                      value={field.value}
                      onChange={(val) => {
                        form.setValue("address", val);
                        form.setValue("latitude", 0);
                        form.setValue("longitude", 0);
                      }}
                      onSelect={(selectedAddress, lat, lng, city) => {
                        form.setValue("address", selectedAddress);
                        form.setValue("latitude", lat);
                        form.setValue("longitude", lng);
                        form.setValue("city", city);
                        if (onChange)
                          onChange({ latitude: lat, longitude: lng });
                      }}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="referenceCode"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="referenceCode">{t("Reference Code")}</Label>
                    <FormControl>
                      <Input id="referenceCode" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {lat !== 0 && lng !== 0 && (
                <p className="text-sm text-muted-foreground">
                  Coordenadas: {lat.toFixed(5)}, {lng.toFixed(5)}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              {t("Add Client")}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
