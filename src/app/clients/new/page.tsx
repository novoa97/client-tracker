// app/clients/new/page.tsx
"use client";

import AddClientForm from "@/app/clients/new/components/add-client-form";
import { addClient } from "../actions/add-client";
import { useState, useEffect } from "react";
import { AddClientMap } from "./components/add-client-map";
import { Header } from "@/components/header";
import { UserPlus } from "lucide-react";
import { useTranslations } from "next-intl";
import { getClientType } from "../actions/get-client-type";
import { ClientType } from "@/generated/prisma";

export default function NewClientPage() {
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const [clientTypes, setClientTypes] = useState<ClientType[]>([]);
  const [selectedType, setSelectedType] = useState<ClientType | null>(null);
  const t = useTranslations();

  useEffect(() => {
    const fetchClientTypes = async () => {
      const clientTypes = await getClientType();
      setClientTypes(clientTypes);
    };
    fetchClientTypes();
  }, []);

  const handleFormChange = (newData: any) => {
    console.log("handleFormChange", newData);
    if (newData.latitude && newData.longitude) {
      console.log("set coord");
      setCoordinates([newData.latitude, newData.longitude]);
    }
    console.log(newData.type);
    if (newData.type) {
      setSelectedType(newData.type);
    }
  };

  return (
    <div className="p-8 h-full flex flex-col">
      <Header icon={UserPlus} title={t("Add Client")}></Header>
      <div className="flex flex-1 gap-2">
        <AddClientForm
          clientTypes={clientTypes}
          onSubmit={addClient}
          onChange={handleFormChange}
        />
        <AddClientMap
          coordinates={coordinates}
          type={selectedType}
        ></AddClientMap>
      </div>
    </div>
  );
}
