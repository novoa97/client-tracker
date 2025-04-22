import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import {
  Laptop,
  Smartphone,
  ComputerIcon as Desktop,
  Tablet,
  Watch,
  Tv,
  Server,
  Printer,
} from "lucide-react";

interface Props {
  onSubmit: any;
}

// Available icons
const availableIcons = [
  { value: "smartphone", label: "Smartphone", icon: Smartphone },
  { value: "laptop", label: "Laptop", icon: Laptop },
  { value: "desktop", label: "Desktop", icon: Desktop },
  { value: "tablet", label: "Tablet", icon: Tablet },
  { value: "watch", label: "Watch", icon: Watch },
  { value: "tv", label: "TV", icon: Tv },
  { value: "server", label: "Server", icon: Server },
  { value: "printer", label: "Printer", icon: Printer },
];

// Define the device type schema
const deviceFormSchema = z.object({
  name: z.string().min(2, {
    message: "Device name must be at least 2 characters.",
  }),
  icon: z.string({
    required_error: "Please select an icon.",
  }),
});

type DeviceFormValues = z.infer<typeof deviceFormSchema>;

export function CreateDeviceTypeDialog({ onSubmit }: Props) {
  const form = useForm<DeviceFormValues>({
    resolver: zodResolver(deviceFormSchema),
    defaultValues: {
      name: "",
      icon: "",
    },
  });
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create Device Type</DialogTitle>
        <DialogDescription>
          Add a new device type to your application.
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter device type name" {...field} />
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an icon" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {availableIcons.map((icon) => (
                      <SelectItem key={icon.value} value={icon.value}>
                        <div className="flex items-center">
                          <icon.icon className="mr-2 h-4 w-4" />
                          {icon.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}
