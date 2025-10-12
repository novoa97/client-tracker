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
import { Device, DeviceType, Incident } from "@/generated/prisma";
import DynamicIcon from "@/components/icon";
import { useTranslations } from "next-intl";
import { Textarea } from "@/components/ui/textarea";

const incidentSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().optional(),
});

export type IncidentFormValues = z.infer<typeof incidentSchema>;

interface DeviceFormProps {
  defaultValues?: Incident;
  onSubmit: (data: IncidentFormValues) => void;
  onCancel?: () => void;
  isLoading?: boolean;
}

export function IncidentForm({
  defaultValues,
  onSubmit,
  onCancel,
  isLoading,
}: DeviceFormProps) {
  const t = useTranslations();
  const form = useForm<IncidentFormValues>({
    resolver: zodResolver(incidentSchema),
    defaultValues: {
      title: defaultValues?.title || "",
      description: defaultValues?.description || "",
    },
  });

  const handleSubmit = async (data: IncidentFormValues) => {
    await onSubmit(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("Title")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("Enter incident title")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("Description")}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t("Enter incident description")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end gap-2">
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? t("Saving") : t("Save")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
