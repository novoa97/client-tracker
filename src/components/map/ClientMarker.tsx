import { ClientWithType } from "@/app/types";
import { MapMarker, MarkerContent, MarkerPopup } from "../ui/map";
import DynamicIcon from "../icon";
import { getTextColor } from "@/lib/colors";
import { ExternalLink } from "lucide-react";
import { ClientType } from "@/generated/prisma";

type BaseProps = {
  longitude: number;
  latitude: number;
};

type WithClient = BaseProps & {
  client: ClientWithType;
  type?: never;
  onSelectClient?: (client: ClientWithType) => void;
};

type WithoutClient = BaseProps & {
  client?: never;
  type: ClientType | null;
  onSelectClient?: never;
};

type Props = WithClient | WithoutClient;

export default function ClientMarker({
  client,
  type,
  longitude,
  latitude,
  onSelectClient,
}: Props) {
  const markerType = client?.type || type || null;

  return (
    <MapMarker longitude={longitude} latitude={latitude}>
      <MarkerContent>
        <div
          className="size-8 rounded-full shadow-lg flex items-center justify-center"
          style={{ backgroundColor: markerType?.color || "#ababab" }}
        >
          <DynamicIcon
            name={markerType?.icon ?? "circle-dashed"}
            className="w-4 h-4"
            style={{ color: getTextColor(markerType?.color || "#ababab") }}
          />
        </div>
      </MarkerContent>
      {client && onSelectClient && (
        <MarkerPopup className="p-0 overflow-hidden">
          <button
            className="flex items-center gap-3 p-3 pr-4 hover:bg-accent/50 transition-colors text-left w-full"
            onClick={() => onSelectClient(client)}
          >
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm truncate">{client.name}</h3>
              <p className="text-xs text-muted-foreground">
                {client.type.name}
              </p>
            </div>
            <ExternalLink className="size-4 text-muted-foreground shrink-0" />
          </button>
        </MarkerPopup>
      )}
    </MapMarker>
  );
}
