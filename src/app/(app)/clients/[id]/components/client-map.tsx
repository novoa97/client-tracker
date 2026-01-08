"use client";

import { Map, useMap } from "@/components/ui/map";
import { ClientWithType } from "@/app/types";
import ClientMarker from "@/components/map/ClientMarker";
import { useEffect, useState } from "react";
import { Crosshair } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
  client: ClientWithType;
};

function RecenterButton({ position }: { position: [number, number] }) {
  const { map, isLoaded } = useMap();
  const [showRecenter, setShowRecenter] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    if (!map || !isLoaded) return;

    const checkIfCentered = () => {
      const center = map.getCenter();
      const distance = Math.sqrt(
        Math.pow(center.lng - position[0], 2) +
          Math.pow(center.lat - position[1], 2)
      );

      // Show button if map moved more than ~50 meters (approximately 0.0005 degrees)
      setShowRecenter(distance > 0.0005);
    };

    map.on("moveend", checkIfCentered);
    checkIfCentered();

    return () => {
      map.off("moveend", checkIfCentered);
    };
  }, [map, isLoaded, position]);

  const handleRecenter = () => {
    if (!map) return;
    map.flyTo({
      center: position,
      zoom: 15,
      duration: 1000,
    });
  };

  if (!showRecenter) return null;

  return (
    <button
      onClick={handleRecenter}
      className="absolute top-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-md shadow-md hover:bg-accent transition-colors"
      aria-label={t("Center map")}
    >
      <Crosshair className="size-4" />
      <span className="text-sm font-medium">{t("Center map")}</span>
    </button>
  );
}

export default function ClientMap({ client }: Props) {
  const fallbackCoords: [number, number] = [42.7551, -7.8662];
  const position: [number, number] = client
    ? [client.longitude, client.latitude]
    : fallbackCoords;

  return (
    <div className="h-full w-full overflow-hidden">
      <Map center={position} zoom={15}>
        <RecenterButton position={position} />
        <ClientMarker
          client={client}
          longitude={client.longitude}
          latitude={client.latitude}
        />
      </Map>
    </div>
  );
}
