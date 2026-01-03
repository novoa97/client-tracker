"use client";
import { Map, useMap } from "@/components/ui/map";
import { useEffect } from "react";
import { ClientType } from "@/generated/prisma";
import ClientMarker from "@/components/map/ClientMarker";

function MapController({
  center,
}: {
  center: [number, number] | null;
  search?: boolean;
}) {
  const { map } = useMap();

  useEffect(() => {
    if (map && center) {
      map.flyTo({ center, zoom: 15 });
    }
  }, [map, center]);

  return null;
}

type Props = {
  coordinates: [number, number] | null;
  type: ClientType | null;
};

export default function AddClientMap({ coordinates, type }: Props) {
  const fallbackCoords: [number, number] = [-7.8662, 42.7551];
  const position = coordinates ?? fallbackCoords;
  const zoom = coordinates ? 15 : 7.5;

  return (
    <div className="h-full w-full p-0">
      <div className="h-full w-full overflow-hidden">
        <Map center={position} zoom={zoom}>
          <MapController center={coordinates} />
          {coordinates && (
            <ClientMarker
              longitude={coordinates[0]}
              latitude={coordinates[1]}
              type={type}
            />
          )}
        </Map>
      </div>
    </div>
  );
}
