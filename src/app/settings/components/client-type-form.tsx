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
import { ClientType } from "@/generated/prisma";
import { useTranslations } from "next-intl";
import { ColorPicker } from "@/components/color-picker";

const clientTypeSchema = z.object({
  name: z.string().min(2, "Device name must be at least 2 characters"),
  color: z.string().min(2, "Color must be at least 2 characters"),
  icon: z.string().nonempty("Please select an icon"),
});

export type ClientTypeFormValues = z.infer<typeof clientTypeSchema>;

interface ClientTypeFormProps {
  defaultValues?: ClientType;
  onSubmit: (data: ClientTypeFormValues) => void;
  onCancel?: () => void;
  isLoading?: boolean;
}

export function ClientTypeForm({
  defaultValues,
  onSubmit,
  onCancel,
  isLoading,
}: ClientTypeFormProps) {
  const t = useTranslations();

  const form = useForm({
    resolver: zodResolver(clientTypeSchema),
    defaultValues: {
      name: defaultValues?.name || "",
      icon: defaultValues?.icon || "",
      color: defaultValues?.color || "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof clientTypeSchema>) => {
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
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Device name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Color</FormLabel>
              <FormControl>
                <ColorPicker value={field.value} onChange={field.onChange} />
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
                  {field.value ? (
                    <DynamicIcon name={field.value} className="h-4 w-4" />
                  ) : (
                    <DynamicIcon name={"loader"} className="h-4 w-4" />
                  )}
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
                You can browse icon names at{" "}
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
