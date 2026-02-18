"use client";

import { Map } from "@/components/ui/map";
import { ClientWithType } from "@/app/types";
import ClientMarker from "@/components/map/ClientMarker";
import { useMapStyle } from "@/hooks/useMapStyle";

type Props = {
  client: ClientWithType;
};

export default function ClientMap({ client }: Props) {
  const { styles: mapStyles } = useMapStyle();
  const fallbackCoords: [number, number] = [42.7551, -7.8662];
  const position: [number, number] = client
    ? [client.longitude, client.latitude]
    : fallbackCoords;

  return (
    <div className="h-full w-full overflow-hidden">
      <Map center={position} zoom={15} styles={mapStyles}>
        <ClientMarker
          client={client}
          longitude={client.longitude}
          latitude={client.latitude}
        />
      </Map>
    </div>
  );
}
