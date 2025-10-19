// components/MapWrapper.tsx
"use client";
import dynamic from "next/dynamic";
import { ClientWithType } from "@/app/types";

const GeneralMap = dynamic(() => import("./general-map"), { ssr: false });

export default function GeneralMapWrapper({
  clients,
  className,
  center,
}: {
  clients: ClientWithType[];
  center?: [number, number];
  className?: string;
}) {
  return (
    <div className={className}>
      <GeneralMap clients={clients} center={center} />
    </div>
  );
}
