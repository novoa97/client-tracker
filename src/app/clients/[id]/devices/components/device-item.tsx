import { Check, Copy, Globe, Hash } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Device } from "@/generated/prisma";
import DynamicIcon from "@/components/icon";
import { DeviceWithRelations } from "@/app/types";
import { DeviceActions } from "./devices-actions";

interface DeviceItemProps {
  device: DeviceWithRelations;
  copyToClipboard: (value: string, label: string, id: string) => void;
  isCopied: (id: string, label: string) => boolean;
  handleDelete: (id: string) => Promise<void>;
  onEdit: (device: Device) => void;
}

export const DeviceItem = ({
  device,
  copyToClipboard,
  isCopied,
  handleDelete,
  onEdit,
}: DeviceItemProps) => {
  const renderIdBlocks = () => (
    <>
      {device.anyDesk && (
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className="flex items-center gap-1.5 bg-muted/50 px-2 py-1 rounded-md cursor-pointer hover:bg-muted transition-colors"
              onClick={() =>
                copyToClipboard(device.anyDesk!, "AnyDesk ID", device.id)
              }
              aria-label={`Copy AnyDesk ID: ${device.anyDesk}`}
            >
              <Hash className="h-3.5 w-3.5 text-amber-500" />
              <span className="text-sm font-medium">AnyDesk:</span>
              <span className="text-sm">{device.anyDesk}</span>
              {isCopied(device.id, "AnyDesk ID") ? (
                <Check className="h-3.5 w-3.5 text-green-500 ml-1" />
              ) : (
                <Copy className="h-3 w-3 text-muted-foreground ml-1 opacity-70" />
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Click to copy AnyDesk ID</p>
          </TooltipContent>
        </Tooltip>
      )}

      {device.ip && (
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className="flex items-center gap-1.5 bg-muted/50 px-2 py-1 rounded-md cursor-pointer hover:bg-muted transition-colors"
              onClick={() =>
                copyToClipboard(device.ip!, "IP Address", device.id)
              }
              aria-label={`Copy IP Address: ${device.ip}`}
            >
              <Globe className="h-3.5 w-3.5 text-blue-500" />
              <span className="text-sm">{device.ip}</span>
              {isCopied(device.id, "IP Address") ? (
                <Check className="h-3.5 w-3.5 text-green-500 ml-1" />
              ) : (
                <Copy className="h-3 w-3 text-muted-foreground ml-1 opacity-70" />
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Click to copy IP Address</p>
          </TooltipContent>
        </Tooltip>
      )}
    </>
  );

  return (
    <>
      {/* Desktop version */}
      <div
        key={device.id + "d"}
        className="hidden md:flex items-center justify-between border-b pb-3 last:border-0 last:pb-0"
      >
        {/* Info */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className="bg-muted rounded-full p-2">
            <DynamicIcon name={device.type.icon} className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h3 className="font-medium truncate mb-1">{device.name}</h3>
            <p className="text-sm text-muted-foreground truncate">
              {device.type.name}
            </p>
          </div>
        </div>

        {/* IP + AnyDesk (alineado a izquierda, ancho fijo o auto) */}
        <div className="flex flex-wrap items-center gap-3 px-6">
          {renderIdBlocks()}
        </div>

        {/* Acciones al final */}
        <div className="flex items-center">
          <DeviceActions
            device={device}
            onDelete={handleDelete}
            onEdit={onEdit}
          />
        </div>
      </div>

      {/* Mobile version */}
      <div
        key={device.id + "m"}
        className="flex md:hidden flex-col border-b pb-3 last:border-0 last:pb-0"
      >
        {/* Info + Acciones */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="bg-muted rounded-full p-2">
              <DynamicIcon name={device.type.icon} className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-medium truncate mb-1">{device.name}</h3>
              <p className="text-sm text-muted-foreground truncate">
                {device.type.name}
              </p>
            </div>
          </div>
          <DeviceActions
            device={device}
            onDelete={handleDelete}
            onEdit={onEdit}
          />
        </div>

        {/* IP + AnyDesk (alineado con texto, no icono) */}
        <div className="mt-2 pl-11 flex flex-wrap gap-3">
          {renderIdBlocks()}
        </div>
      </div>
    </>
  );
};
