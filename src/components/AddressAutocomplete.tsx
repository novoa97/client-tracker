// src/components/AddressAutocomplete.tsx
"use client";

import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSelect: (address: string, lat: number, lng: number, city: string) => void;
};

export default function AddressAutocomplete({
  value,
  onChange,
  onSelect,
}: Props) {
  const {
    ready,
    value: inputValue,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "es" },
    },
    debounce: 300,
  });

  const [lastSelected, setLastSelected] = useState<string | null>(null);

  useEffect(() => {
    if (value === lastSelected) return;
    setValue(value);
  }, [value, setValue, lastSelected]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  const handleSelect = async (description: string) => {
    try {
      const results = await getGeocode({ address: description });
      const { lat, lng } = await getLatLng(results[0]);

      const formatted = results[0].formatted_address;
      setValue(formatted, false);
      setLastSelected(formatted);
      onChange(formatted);
      clearSuggestions();

      // Extraer ciudad
      const city = results[0].address_components.find((c: any) =>
        c.types.includes("locality")
      )?.long_name;

      // Puedes usar el nuevo parámetro 'city' aquí
      console.log("Ciudad:", city);

      // Modifica tu función onSelect si quieres enviar también la ciudad
      onSelect(formatted, lat, lng, city); // o: onSelect(description, lat, lng, city);
    } catch (error) {
      console.error("Error al obtener coordenadas:", error);
    }
  };

  return (
    <div className="relative">
      <Label className="mb-2">Dirección</Label>
      <Input
        value={inputValue}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Escribe una dirección"
      />
      {status === "OK" && data.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border mt-1 rounded shadow max-h-60 overflow-y-auto">
          {data.map(({ place_id, description }) => (
            <li
              key={place_id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => handleSelect(description)}
            >
              {description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
