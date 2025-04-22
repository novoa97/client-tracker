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
import { License, LicenseType } from "@/generated/prisma";
import { LicenseWithRelations } from "@/app/types";

// Define the schema for sublicense
const sublicenseSchema = z.object({
  id: z.string().min(1, "ID is required"),
  type: z.string().min(1, "Type is required"),
});

// Define the schema for the form
const formSchema = z.object({
  id: z.string().min(1, "ID is required"),
  type: z.string().min(1, "Type is required"),
  sublicenses: z.array(sublicenseSchema),
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
  // Initialize the form
  const form = useForm<LicenseFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: defaultValues?.id || "",
      type: defaultValues?.typeKey || "",
      sublicenses:
        defaultValues?.subLicenses.map((l) => {
          return { id: l.id, type: l.typeKey };
        }) || [],
    },
  });

  // Function to add a new sublicense
  const addSublicense = () => {
    const currentSublicenses = form.getValues("sublicenses");
    form.setValue("sublicenses", [...currentSublicenses, { id: "", type: "" }]);
  };

  // Function to remove a sublicense
  const removeSublicense = (index: number) => {
    const currentSublicenses = form.getValues("sublicenses");
    form.setValue(
      "sublicenses",
      currentSublicenses.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = async (values: LicenseFormValues) => {
    await onSubmit(values);
  };

  // Determine button text based on mode
  const buttonText = mode === "create" ? "Create License" : "Update License";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>License ID</FormLabel>
                <FormControl>
                  <Input placeholder="Enter license ID" {...field} />
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
                <FormLabel>License Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select license type" />
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
              <h3 className="text-sm font-medium">Sublicenses</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addSublicense}
                className="h-8 gap-1"
              >
                <PlusCircle className="h-4 w-4" />
                <span>Add Sublicense</span>
              </Button>
            </div>

            {form.watch("sublicenses").length > 0 ? (
              <div className="space-y-4">
                {form.watch("sublicenses").map((_, index) => (
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
                        name={`sublicenses.${index}.id`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sublicense ID</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter sublicense ID"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`sublicenses.${index}.type`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sublicense Type</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select type" />
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
                No sublicenses added yet. Click the button above to add one.
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting
              ? mode === "create"
                ? "Creating..."
                : "Updating..."
              : buttonText}
          </Button>
        </div>
      </form>
    </Form>
  );
}
