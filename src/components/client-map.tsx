"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

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

type Props = {
  coordinates: [number, number] | null;
};

export const ClientMap = ({ coordinates }: Props) => {
  const fallbackCoords: [number, number] = [42.7551, -7.8662];
  const position = coordinates ?? fallbackCoords;

  // Componente auxiliar interno
  const MapUpdater = ({ center }: { center: [number, number] }) => {
    const map = useMap();

    useEffect(() => {
      map.setView(center, coordinates ? 15 : 8);
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
          {coordinates ? (
            <Marker position={position}>
              <Popup>Cliente</Popup>
            </Marker>
          ) : null}
          <MapUpdater center={position} />
        </MapContainer>
      </div>
    </Card>
  );
};
