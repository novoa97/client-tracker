// app/clients/new/page.tsx
"use client";

import AddClientForm from "@/app/clients/new/components/add-client-form";
import { addClient } from "../actions/add-client";
import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { UserPlus } from "lucide-react";
import { useTranslations } from "next-intl";
import { getClientType } from "../actions/get-client-type";
import { ClientType } from "@/generated/prisma";
import AddClientMapWrapper from "./components/add-client-map-wrapper";

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

  const handleFormChange = (newData: {
    latitude: number;
    longitude: number;
    type?: ClientType;
  }) => {
    if (newData.latitude && newData.longitude) {
      setCoordinates([newData.latitude, newData.longitude]);
    }
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
        <AddClientMapWrapper
          className="hidden md:block w-1/2 h-full"
          coordinates={coordinates}
          type={selectedType}
        ></AddClientMapWrapper>
      </div>
    </div>
  );
}
