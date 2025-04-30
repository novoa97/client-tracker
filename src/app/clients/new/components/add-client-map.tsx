"use client";

import { Card } from "@/components/ui/card";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useRef } from "react";
import { ClientType } from "@/generated/prisma";
import { generateMarkerIcon } from "@/lib/marker";
import { renderToStaticMarkup } from "react-dom/server";
import DynamicIcon from "@/components/icon";

type Props = {
  coordinates: [number, number] | null;
  type: ClientType | null;
};

export default function AddClientMap({ coordinates, type }: Props) {
  const fallbackCoords: [number, number] = [42.7551, -7.8662];
  const position = coordinates ?? fallbackCoords;

  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    if (markerRef.current && type) {
      const newIcon = generateMarkerIcon(
        type?.color ?? "#ababab",
        renderToStaticMarkup(
          type?.icon ? (
            <DynamicIcon name={type.icon} className="text-white w-4 h-4" />
          ) : (
            <DynamicIcon name={"circle-dashed"} className=" w-4 h-4" />
          )
        )
      );
      markerRef.current.setIcon(newIcon);
    }
  }, [type]);

  const MapUpdater = ({ center }: { center: [number, number] }) => {
    const map = useMap();

    useEffect(() => {
      map.setView(center, coordinates ? 15 : 8);
    }, [center, map]);

    return null;
  };

  return (
    <Card className="h-full w-full p-0">
      <div className="h-full w-full rounded-lg overflow-hidden">
        <MapContainer
          center={position}
          zoom={8.4}
          scrollWheelZoom={true}
          className="w-full h-full leaflet-rounded"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {coordinates ? (
            <Marker
              ref={markerRef}
              position={position}
              icon={generateMarkerIcon(
                type?.color ?? "#ababab",
                renderToStaticMarkup(
                  type?.icon ? (
                    <DynamicIcon
                      name={type.icon}
                      className="text-white w-4 h-4"
                    />
                  ) : (
                    <DynamicIcon name={"user"} className=" w-4 h-4" />
                  )
                )
              )}
            />
          ) : null}
          <MapUpdater center={position} />
        </MapContainer>
      </div>
    </Card>
  );
}
