"use client";

import { Card } from "@/components/ui/card";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { ClientWithType } from "@/app/types";
import { generateMarkerIcon } from "@/lib/marker";
import { renderToStaticMarkup } from "react-dom/server";
import DynamicIcon from "@/components/icon";
import { getTextColor } from "@/lib/colors";
type Props = {
  client: ClientWithType;
};

export default function ClientMap({ client }: Props) {
  const fallbackCoords: [number, number] = [42.7551, -7.8662];
  const position: [number, number] = client
    ? [client.latitude, client.longitude]
    : fallbackCoords;

  // Componente auxiliar interno
  const MapUpdater = ({ center }: { center: [number, number] }) => {
    const map = useMap();

    useEffect(() => {
      map.setView(center, position ? 15 : 8);
    }, [center, map]);

    return null;
  };

  return (
    <Card className="w-full h-full p-0">
      <div className="h-full w-full rounded-lg overflow-hidden">
        <MapContainer
          center={position}
          zoom={8.4}
          scrollWheelZoom={true}
          className="w-full h-full leaflet-rounded z-0"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {client ? (
            <Marker
              position={position}
              icon={generateMarkerIcon(
                client.type.color,
                renderToStaticMarkup(
                  <DynamicIcon
                    name={client.type.icon}
                    className="text-white w-4 h-4"
                    style={{ color: getTextColor(client.type.color) }}
                  />
                )
              )}
            ></Marker>
          ) : null}
          <MapUpdater center={position} />
        </MapContainer>
      </div>
    </Card>
  );
}
