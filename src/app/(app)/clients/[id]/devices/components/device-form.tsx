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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Device, DeviceType } from "@/generated/prisma";
import DynamicIcon from "@/components/icon";
import { useTranslations } from "next-intl";
// valid IP regex
const ipRegex =
  /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;

const deviceSchema = z.object({
  name: z.string().min(2, "Device name must be at least 2 characters"),
  type: z.string().nonempty("Please select a type"),
  serialNumber: z.string().optional(),
  anyDesk: z.string().optional(),
  ip: z
    .string()
    .optional()
    .refine((val) => !val || ipRegex.test(val), {
      message: "Invalid IP address",
    }),
});

export type DeviceFormValues = z.infer<typeof deviceSchema>;

interface DeviceFormProps {
  defaultValues?: Device;
  types: DeviceType[];
  onSubmit: (data: DeviceFormValues) => void;
  onCancel?: () => void;
  isLoading?: boolean;
}

export function DeviceForm({
  defaultValues,
  types,
  onSubmit,
  onCancel,
  isLoading,
}: DeviceFormProps) {
  const t = useTranslations();
  const form = useForm<DeviceFormValues>({
    resolver: zodResolver(deviceSchema),
    defaultValues: {
      name: defaultValues?.name || "",
      type: defaultValues?.typeKey || "",
      serialNumber: defaultValues?.serialNumber || "",
      anyDesk: defaultValues?.anyDesk || "",
      ip: defaultValues?.ip || "",
    },
  });

  const handleSubmit = async (data: DeviceFormValues) => {
    await onSubmit(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("Name")}</FormLabel>
              <FormControl>
                <Input placeholder={t("Device name")} {...field} />
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
                    <SelectValue placeholder={t("Select device type")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {types.map((type) => (
                    <SelectItem key={type.key} value={type.key}>
                      <div className="flex items-center gap-2">
                        <DynamicIcon name={type.icon} className="h-4 w-4" />
                        {type.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="serialNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t("Serial Number")} ({t("Optional")})
              </FormLabel>
              <FormControl>
                <Input placeholder="e.g. SMPH00123" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="anyDesk"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Anydesk ({t("Optional")})</FormLabel>
              <FormControl>
                <Input placeholder="e.g. 123 456 789" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ip"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t("IP Address")} ({t("Optional")})
              </FormLabel>
              <FormControl>
                <Input placeholder="e.g. 192.168.1.10" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-2">
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button type="submit" disabled={isLoading}>
            {isLoading ? t("Saving") : t("Save")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
