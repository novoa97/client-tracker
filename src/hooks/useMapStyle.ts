"use client";

import { useCallback, useEffect, useState } from "react";
import {
  getMapStyleFromStorage,
  setMapStyleInStorage,
  getMapStylesForId,
  MAP_STYLE_PRESETS,
  type MapStyleId,
} from "@/lib/map-styles";

export function useMapStyle(): {
  styleId: MapStyleId;
  styles: { light: string | undefined; dark: string | undefined };
  setStyleId: (id: MapStyleId) => void;
} {
  const [styleId, setStyleIdState] = useState<MapStyleId>("carto");

  useEffect(() => {
    setStyleIdState(getMapStyleFromStorage());
  }, []);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "map-style" && e.newValue) {
        const valid = MAP_STYLE_PRESETS.some((p) => p.id === e.newValue);
        if (valid) setStyleIdState(e.newValue as MapStyleId);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const setStyleId = useCallback((id: MapStyleId) => {
    setMapStyleInStorage(id);
    setStyleIdState(id);
  }, []);

  const styles = getMapStylesForId(styleId);

  return { styleId, styles, setStyleId };
}
