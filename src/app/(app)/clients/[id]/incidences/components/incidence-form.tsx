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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Incidence } from "@/generated/prisma";
import { useTranslations } from "next-intl";
import { Textarea } from "@/components/ui/textarea";
import { IncidenceData } from "../actions";

const incidenceSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().optional(),
  date: z.date(),
});

export type IncidenceFormValues = z.infer<typeof incidenceSchema>;

interface IncidenceFormProps {
  incidence?: Incidence | null;
  onSubmit: (data: IncidenceData) => void;
  onCancel?: () => void;
  isLoading?: boolean;
}

export function IncidenceForm({
  incidence,
  onSubmit,
  onCancel,
  isLoading,
}: IncidenceFormProps) {
  const t = useTranslations();
  const form = useForm<IncidenceFormValues>({
    resolver: zodResolver(incidenceSchema),
    defaultValues: {
      title: incidence?.title || "",
      description: incidence?.description || "",
      date: incidence?.date || new Date(),
    },
  });

  const handleSubmit = async (data: IncidenceFormValues) => {
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
                  <Input placeholder={t("Title")} {...field} />
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
                <FormLabel>
                  {t("Description")} ({t("Optional")})
                </FormLabel>
                <FormControl>
                  <Textarea placeholder={t("Description") + "..."} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("Date")}</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    value={field.value.toISOString().split("T")[0]}
                    onChange={(e) => {
                      field.onChange(new Date(e.target.value));
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? t("Saving") : t("Save")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
