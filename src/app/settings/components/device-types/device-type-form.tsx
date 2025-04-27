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
import DynamicIcon from "@/components/icon";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { DeviceType } from "@/generated/prisma";

const deviceSchema = z.object({
  name: z.string().min(2, "Device name must be at least 2 characters"),
  icon: z.string().nonempty("Please select an icon"),
});

type DeviceTypeFormProps = {
  defaultValues?: DeviceType | null;
  onSubmit: (data: z.infer<typeof deviceSchema>) => Promise<void>;
};

export function DeviceTypeForm({
  onSubmit,
  defaultValues,
}: DeviceTypeFormProps) {
  const t = useTranslations();

  const form = useForm({
    resolver: zodResolver(deviceSchema),
    defaultValues: {
      name: defaultValues?.name || "",
      icon: defaultValues?.icon || "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof deviceSchema>) => {
    await onSubmit(data);
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
                <Input placeholder={t("Type name")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="icon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Icon</FormLabel>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <DynamicIcon name={field.value} className="h-4 w-4" />
                </div>
                <FormControl>
                  <Input
                    placeholder="Enter an icon name (e.g. monitor)"
                    className={"pl-9"}
                    {...field}
                  />
                </FormControl>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {t("You can browse icon names at")}{" "}
                <a
                  href="https://lucide.dev/icons/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary"
                >
                  lucide.dev/icons
                </a>
                .
              </p>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Create</Button>
        </div>
      </form>
    </Form>
  );
}
