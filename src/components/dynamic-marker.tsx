import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import * as LucideIcons from "lucide-react";

interface DynamicMarkerProps {
  position: [number, number];
  color?: string;
  iconName: keyof typeof LucideIcons;
}

export function DynamicMarker({
  position,
  color = "#2c3e50",
  iconName,
}: DynamicMarkerProps) {
  const IconComponent = LucideIcons[iconName];

  if (!IconComponent) {
    console.error(`Icon "${iconName}" not found in LucideIcons`);
    return null;
  }

  const iconHtml = `
    <div style="
      background: ${color};
      padding: 8px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      ${renderToStaticMarkup(<IconComponent color="white" size={20} />)}
    </div>
  `;

  const customIcon = L.divIcon({
    className: "",
    html: iconHtml,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  return (
    <Marker position={position} icon={customIcon}>
      <Popup>¡Hola desde el marcador!</Popup>
    </Marker>
  );
}
