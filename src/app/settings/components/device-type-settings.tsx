"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Pencil,
  Trash,
  Smartphone,
  Laptop,
  ComputerIcon as Desktop,
  Tablet,
  Watch,
  Tv,
  Server,
  Printer,
  Check,
  CircleX,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TableRow, TableCell } from "@/components/ui/table";
import { CardList } from "@/components/card-list";
import { useTranslations } from "next-intl";
import { addDeviceType } from "../actions/add-device-type";
import { useRouter } from "next/navigation";
import { DeviceType } from "@/generated/prisma";
import { deleteDeviceType } from "../actions/delete-device-type";
import { editDeviceType } from "../actions/edit-device-type";
import DynamicIcon from "@/components/icon";
import { DeviceTypeWithInUse } from "../actions/get-devices-type";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

const deviceSchema = z.object({
  name: z.string().min(2, "Device name must be at least 2 characters"),
  icon: z.string().nonempty("Please select an icon"),
});

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

interface Props {
  types: DeviceTypeWithInUse[];
}

export function DeviceTypeSettings({ types }: Props) {
  const [items, setItems] = useState<DeviceTypeWithInUse[] | null>(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingDevice, setEditingDevice] = useState<DeviceType | null>(null);
  const t = useTranslations();
  const router = useRouter();

  useEffect(() => {
    setItems(types);
  }, [types]);

  const createForm = useForm({
    resolver: zodResolver(deviceSchema),
    defaultValues: { name: "", icon: "" },
  });

  const editForm = useForm({
    resolver: zodResolver(deviceSchema),
    defaultValues: { name: "", icon: "" },
  });

  const selectedIcon = editForm.watch("icon");

  const handleCreate = async (data: z.infer<typeof deviceSchema>) => {
    try {
      const response = await addDeviceType(data);
      if (response.ok) {
        setIsCreateOpen(false);
        createForm.reset();
        router.refresh();
        toast(t("Device type created"), {
          description: t("The device type has been created"),
          duration: 2000,
          icon: <Check className="h-4 w-4 text-green-500" />,
        });
      } else {
        toast.error(t("Error creating device type"), {
          description: t(response.message),
          duration: 3000,
        });
      }
    } catch (error) {
      toast.error(t("Error creating device type"), {
        description: t("There was a problem creating the device type"),
        duration: 3000,
      });
    }
  };

  const handleEdit = async (data: z.infer<typeof deviceSchema>) => {
    if (!editingDevice) return;
    await editDeviceType(editingDevice.key, data);
    setEditingDevice(null);
    editForm.reset();
    router.refresh();
  };

  const handleDelete = async (id: string) => {
    await deleteDeviceType(id);
    router.refresh();
    createForm.reset();
    toast(t("Device type deleted"), {
      description: t("The device type has been deleted"),
      duration: 2000,
      icon: <Check className="h-4 w-4 text-green-500" />,
    });
  };

  if (!items) {
    return null;
  }

  return (
    <>
      <CardList
        title={t("Devices Types")}
        description={t("Manage device types for your application")}
        buttonText={t("Add Device Type")}
        emptyMessage={t("No device types added yet")}
        headers={[t("Icon"), t("Name")]}
        onCreateClick={() => setIsCreateOpen(true)}
        variant="table"
      >
        {items.map((type) => (
          <TableRow key={type.key}>
            <TableCell>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                <DynamicIcon name={type.icon} className="h-5 w-5" />
              </div>
            </TableCell>
            <TableCell>{type.name}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    editForm.setValue("name", type.name);
                    editForm.setValue("icon", type.icon);
                    setEditingDevice(type);
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <Button
                        variant="ghost"
                        size="icon"
                        disabled={type.inUse}
                        onClick={() => handleDelete(type.key)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TooltipTrigger>
                  {type.inUse && (
                    <TooltipContent side="top">
                      {t("This type is in use and cannot be deleted")}
                    </TooltipContent>
                  )}
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </CardList>

      {/* Diálogo crear */}
      <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Device Type</DialogTitle>
            <DialogDescription>
              Add a new device type to your application.
            </DialogDescription>
          </DialogHeader>
          <Form {...createForm}>
            <form
              onSubmit={createForm.handleSubmit(handleCreate)}
              className="space-y-4"
            >
              <FormField
                control={createForm.control}
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
                control={createForm.control}
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
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsCreateOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Create</Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Diálogo editar */}
      <Dialog
        open={!!editingDevice}
        onOpenChange={() => setEditingDevice(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Device Type</DialogTitle>
            <DialogDescription>
              Modify the device type and save the changes.
            </DialogDescription>
          </DialogHeader>
          <Form {...editForm}>
            <form
              onSubmit={editForm.handleSubmit(handleEdit)}
              className="space-y-4"
            >
              <FormField
                control={editForm.control}
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
                control={editForm.control}
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
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEditingDevice(null)}
                >
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
