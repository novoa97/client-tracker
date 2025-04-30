// components/MapWrapper.tsx
"use client";
import dynamic from "next/dynamic";
import { ClientType } from "@/generated/prisma";

const AddClientMap = dynamic(() => import("./add-client-map"), { ssr: false });

export default function AddClientMapWrapper({
  coordinates,
  type,
  className,
}: {
  coordinates: [number, number] | null;
  type: ClientType | null;
  className?: string;
}) {
  return (
    <div className={className}>
      <AddClientMap coordinates={coordinates} type={type} />
    </div>
  );
}
