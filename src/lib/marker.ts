import L from "leaflet";
import { darkenColor } from "./colors";

export function generateMarkerIcon(color: string, iconHtml: string) {
  const borderColor = darkenColor(color, 30); // Más oscuro que el color base

  return L.divIcon({
    className: "",
    html: `
      <div style="position: relative; width: 40px; height: 55px;">
        <svg width="40" height="50" viewBox="0 0 40 55" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.4));">
          <path d="M20 0C9 0 0 9 0 20c0 15 20 35 20 35s20-20 20-35C40 9 31 0 20 0z" fill="${borderColor}"/>
          <path d="M20 4c-8.8 0-16 7.2-16 16 0 12 16 30 16 30s16-18 16-30c0-8.8-7.2-16-16-16z" fill="${color}"/>
        </svg>
        <div style="
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          ${iconHtml}
        </div>
      </div>
    `,
    iconSize: [40, 55],
    iconAnchor: [20, 55],
    popupAnchor: [0, -45],
  });
}