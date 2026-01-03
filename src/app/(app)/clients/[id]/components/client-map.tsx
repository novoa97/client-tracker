"use client";

import { Map } from "@/components/ui/map";
import { ClientWithType } from "@/app/types";
import ClientMarker from "@/components/map/ClientMarker";

type Props = {
  client: ClientWithType;
};

export default function ClientMap({ client }: Props) {
  const fallbackCoords: [number, number] = [42.7551, -7.8662];
  const position: [number, number] = client
    ? [client.longitude, client.latitude]
    : fallbackCoords;

  return (
    <div className="h-full w-full overflow-hidden">
      <Map center={position} zoom={15}>
        <ClientMarker
          client={client}
          longitude={client.longitude}
          latitude={client.latitude}
        />
      </Map>
    </div>
  );
}
