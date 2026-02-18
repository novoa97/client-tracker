/**
 * Map style presets for MapLibre. Each preset has light and dark style URLs.
 * Used with the map style selector in Settings.
 * URLs from OpenFreeMap must not include /style.json.
 * @see https://www.mapcn.dev/docs/basic-map
 * @see https://openfreemap.org/
 */
export const MAP_STYLE_PRESETS = [
  {
    id: "carto",
    labelKey: "MapStyleCarto",
    light: undefined,
    dark: undefined,
  },
  {
    id: "openstreetmap",
    labelKey: "MapStyleOpenstreetmap",
    light: "https://tiles.openfreemap.org/styles/bright",
    dark: "https://tiles.openfreemap.org/styles/dark",
  },
  {
    id: "openstreetmap3d",
    labelKey: "MapStyleOpenstreetmap3d",
    light: "https://tiles.openfreemap.org/styles/liberty",
    dark: "https://tiles.openfreemap.org/styles/liberty",
  },
] as const;

export type MapStyleId = (typeof MAP_STYLE_PRESETS)[number]["id"];

const STORAGE_KEY = "map-style";

export function getMapStyleFromStorage(): MapStyleId {
  if (typeof window === "undefined") return "carto";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  const valid = MAP_STYLE_PRESETS.some((p) => p.id === stored);
  return valid ? (stored as MapStyleId) : "carto";
}

export function setMapStyleInStorage(id: MapStyleId): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, id);
}

export function getMapStylesForId(id: MapStyleId): {
  light: string | undefined;
  dark: string | undefined;
} {
  const preset = MAP_STYLE_PRESETS.find((p) => p.id === id) ?? MAP_STYLE_PRESETS[0];
  return { light: preset.light, dark: preset.dark };
}
