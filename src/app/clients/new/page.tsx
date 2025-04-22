// app/clients/new/page.tsx
"use client";

import AddClientForm from "@/app/clients/new/components/add-client-form";
import { addClient } from "../actions/add-client";
import { useState } from "react";
import { AddClientMap } from "./components/add-client-map";
import { Header } from "@/components/Header";
import { UserPlus } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NewClientPage() {
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const t = useTranslations();

  const handleFormChange = (newData: any) => {
    console.log(newData);
    if (newData.latitude && newData.longitude) {
      console.log("set coord");
      setCoordinates([newData.latitude, newData.longitude]);
    }
  };

  return (
    <div className="p-8 h-screen flex flex-col">
      <Header icon={UserPlus} title={t("Add Client")}></Header>
      <div className="flex flex-1 gap-2">
        <AddClientForm onSubmit={addClient} onChange={handleFormChange} />
        <AddClientMap coordinates={coordinates}></AddClientMap>
      </div>
    </div>
  );
}
