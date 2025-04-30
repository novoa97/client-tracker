// components/MapWrapper.tsx
"use client";
import dynamic from "next/dynamic";
import { ClientWithType } from "@/app/types";

const ClientMap = dynamic(() => import("./client-map"), { ssr: false });

export default function ClientMapWrapper({
  client,
  className,
}: {
  client: ClientWithType;
  className?: string;
}) {
  return (
    <div className={className}>
      <ClientMap client={client} />
    </div>
  );
}
