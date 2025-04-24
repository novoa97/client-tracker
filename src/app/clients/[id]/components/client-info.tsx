"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Client } from "@/generated/prisma";
import {
  Building,
  FileText,
  MapPin,
  ChevronDown,
  ChevronUp,
  Edit,
} from "lucide-react";
import { useTranslations } from "use-intl";
import { Button } from "@/components/ui/button";
import { DialogContainer } from "@/components/dialog-container";
import { EditClientForm } from "./edit-client-form";
import { editClient, EditClientData } from "../actions/edit-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Props {
  client: Client;
}

export function ClientInfo({ client }: Props) {
  const router = useRouter();
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = async (data: EditClientData) => {
    await editClient(client.id, data);
    setIsEditing(false);

    toast.success(t("Client updated successfully"), {
      duration: 2000,
    });

    router.refresh();
  };

  return (
    <>
      <Card className="mb-2 mb:mb-6">
        <CardHeader
          className="flex flex-row items-center justify-between pb-2 cursor-pointer md:cursor-default"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CardTitle>Información</CardTitle>
          <span className="md:hidden">
            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex items-center gap-1"
            onClick={() => setIsEditing(true)}
          >
            <Edit className="h-4 w-4" />
            <span className="hidden sm:inline">Edit Info</span>
          </Button>
        </CardHeader>

        <CardContent className={`${isOpen ? "block" : "hidden"} md:block`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">
                  {t("Legal Name")}
                </p>
                <p className="font-medium">{client.legalName}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">{t("VAT")}</p>
                <p className="font-medium">{client.taxId}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 md:col-span-2">
              <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">{t("Address")}</p>
                <p className="font-medium">{client.address}</p>
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="flex md:hidden items-center mt-4 w-full"
            onClick={() => setIsEditing(true)}
          >
            <Edit className="h-4 w-4" />
            <span className="inline">Edit Info</span>
          </Button>
        </CardContent>
      </Card>
      <DialogContainer
        open={isEditing}
        onOpenChange={setIsEditing}
        title={t("Edit Client Info")}
      >
        <EditClientForm
          defaultValues={client}
          onSubmit={handleSubmit}
          onCancel={() => setIsEditing(false)}
          isLoading={false}
        />
      </DialogContainer>
    </>
  );
}
