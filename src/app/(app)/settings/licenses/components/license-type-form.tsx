import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";

const licenseFormSchema = z.object({
  name: z.string().min(2, {
    message: "License name must be at least 2 characters.",
  }),
});

type LicenseFormValues = z.infer<typeof licenseFormSchema>;

interface LicenseTypeFormProps {
  onSubmit: (data: LicenseFormValues) => void;
  isLoading?: boolean;
  defaultValues?: LicenseFormValues;
}

export function LicenseTypeForm({
  onSubmit,
  isLoading,
  defaultValues,
}: LicenseTypeFormProps) {
  const t = useTranslations();

  const form = useForm<LicenseFormValues>({
    resolver: zodResolver(licenseFormSchema),
    defaultValues: { name: defaultValues?.name || "" },
  });

  const handleSubmit = (data: LicenseFormValues) => {
    onSubmit(data);
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
                <Input placeholder={t("Enter license type name")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2">
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? t("Saving") : t("Save")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
