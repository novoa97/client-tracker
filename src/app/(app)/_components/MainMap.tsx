"use client";

import { ClientWithType } from "@/app/types";
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MapControls,
  useMap,
} from "@/components/ui/map";
import { getTextColor } from "@/lib/colors";
import { useEffect } from "react";
import DynamicIcon from "@/components/icon";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ExternalLink } from "lucide-react";
import ClientMarker from "@/components/map/ClientMarker";
interface Props {
  clients: ClientWithType[];
  center: [number, number] | undefined;
  search?: boolean;
}

function MapController({
  center,
  search = false,
}: {
  center: [number, number] | undefined;
  search?: boolean;
}) {
  const { map } = useMap();

  useEffect(() => {
    if (map && center && search) {
      map.flyTo({ center, zoom: 15 });
    } else if (map && center) {
      map.jumpTo({ center, zoom: 15 });
    }
  }, [map, center]);

  return null;
}

export default function MainMap({ clients, center, search }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onSelectClient = (client: ClientWithType) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set("lat", String(client.latitude));
    params.set("lng", String(client.longitude));
    params.delete("search");
    sessionStorage.setItem("backOrigin", pathname + "?" + params.toString());
    router.push(`/clients/${client.id}`);
  };

  return (
    <div className="w-full h-full">
      <Map center={[-8, 42.7551]} zoom={7.5}>
        <MapControls position="bottom-right" showZoom showCompass />
        <MapController center={center} search={search} />
        {clients.map((client) => (
          <ClientMarker
            key={client.id}
            client={client}
            longitude={client.longitude}
            latitude={client.latitude}
            onSelectClient={onSelectClient}
          />
        ))}
      </Map>
    </div>
  );
}
