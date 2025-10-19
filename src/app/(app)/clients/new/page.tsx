// app/clients/new/page.tsx
"use client";

import AddClientForm from "@/app/(app)/clients/new/components/add-client-form";
import { addClient } from "../actions/add-client";
import { useState, useEffect } from "react";
import { getClientType } from "../actions/get-client-type";
import { ClientType } from "@/generated/prisma";
import AddClientMapWrapper from "./components/add-client-map-wrapper";
import { PageHeader } from "@/components/page-header";

export default function NewClientPage() {
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const [clientTypes, setClientTypes] = useState<ClientType[]>([]);
  const [selectedType, setSelectedType] = useState<ClientType | null>(null);

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
    <div className="h-full flex flex-col">
      <PageHeader title="Add Client" icon="user-plus"></PageHeader>
      <div className="flex flex-1">
        <AddClientForm
          clientTypes={clientTypes}
          onSubmit={addClient}
          onChange={handleFormChange}
        />
        <AddClientMapWrapper
          className="hidden md:block w-2/3 h-full"
          coordinates={coordinates}
          type={selectedType}
        ></AddClientMapWrapper>
      </div>
    </div>
  );
}
