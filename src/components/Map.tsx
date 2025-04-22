"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Client } from "@/generated/prisma";
import Link from "next/link";

// Fix para los iconos por defecto de Leaflet en Vite/Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL(
    "leaflet/dist/images/marker-icon-2x.png",
    import.meta.url
  ).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url)
    .href,
});

interface Props {
  clients: Client[];
}

export default function GeneralMap({ clients }: Props) {
  return (
    <MapContainer
      center={[42.7551, -7.8662]}
      zoom={8.4}
      scrollWheelZoom={true}
      className="w-full h-full z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {clients.map((client) => (
        <Marker key={client.id} position={[client.latitude, client.longitude]}>
          <Popup>
            <Link href={"clients/" + client.id}>{client.name}</Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
