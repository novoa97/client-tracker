"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { ClientWithType } from "@/app/types";
import { renderToStaticMarkup } from "react-dom/server";
import DynamicIcon from "./icon";
import { generateMarkerIcon } from "@/lib/marker";
import { getTextColor } from "@/lib/colors";

interface Props {
  clients: ClientWithType[];
}

export default function GeneralMap({ clients }: Props) {
  // Agrupar clientes por tipo dinámicamente
  const clientsByType = clients.reduce<Record<string, ClientWithType[]>>(
    (acc, client) => {
      if (!acc[client.type.name]) {
        acc[client.type.name] = [];
      }
      acc[client.type.name].push(client);
      return acc;
    },
    {}
  );

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

      <LayersControl position="topright">
        {Object.entries(clientsByType).map(([typeName, clients]) => (
          <LayersControl.Overlay
            key={typeName}
            name={typeName.charAt(0).toUpperCase() + typeName.slice(1)}
            checked
          >
            <LayerGroup>
              {clients.map((client) => {
                const iconHtml = renderToStaticMarkup(
                  <DynamicIcon
                    name={client.type.icon}
                    className="text-white w-4 h-4"
                    style={{ color: getTextColor(client.type.color) }}
                  />
                );
                const customIcon = generateMarkerIcon(
                  client.type.color,
                  iconHtml
                );
                return (
                  <Marker
                    key={client.id}
                    position={[client.latitude, client.longitude]}
                    icon={customIcon}
                  >
                    <Popup>
                      <Link href={"clients/" + client.id}>
                        <div className="flex flex-row items-center gap-2 text-md font-bold text-black">
                          {client.name}
                        </div>
                      </Link>
                    </Popup>
                  </Marker>
                );
              })}
            </LayerGroup>
          </LayersControl.Overlay>
        ))}
      </LayersControl>
    </MapContainer>
  );
}
