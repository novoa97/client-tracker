"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AddressAutocomplete from "@/components/AddressAutocomplete"; // asumo que esto ya lo tenés

type Props = {
  onSubmit: (data: {
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    city: string;
    taxId: string;
    legalName: string;
  }) => Promise<void>;
  onChange?: (data: { latitude: number; longitude: number }) => void;
};

export default function AddClientForm({ onSubmit, onChange }: Props) {
  const [name, setName] = useState("");
  const [legalName, setLegalName] = useState("");
  const [taxId, setTaxId] = useState("");
  const [address, setAddress] = useState("");
  const [latLng, setLatLng] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [city, setCity] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!latLng) {
      alert("Selecciona una dirección válida");
      return;
    }
    if (!city) {
      alert("Selecciona una ciudad válida");
      return;
    }

    await onSubmit({
      name,
      address,
      latitude: latLng.lat,
      longitude: latLng.lng,
      city: city,
      taxId: taxId,
      legalName: legalName,
    });

    // Redirigir (opcional)
    window.location.href = "/clients";
  };

  const handleOnChange = (latitude: number, longitude: number) => {
    if (onChange) {
      onChange({
        latitude: latitude,
        longitude: longitude,
      });
    }
  };

  return (
    <Card className="w-1/2 h-full">
      <CardContent className="space-y-4 pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="mb-2" htmlFor="name">
              Nombre
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <Label className="mb-2" htmlFor="name">
              Razón social
            </Label>
            <Input
              id="legalName"
              value={legalName}
              onChange={(e) => setLegalName(e.target.value)}
              required
            />
          </div>

          <div>
            <Label className="mb-2" htmlFor="name">
              CIF
            </Label>
            <Input
              id="taxId"
              value={taxId}
              onChange={(e) => setTaxId(e.target.value)}
              required
            />
          </div>

          <AddressAutocomplete
            value={address}
            onChange={(val) => {
              setAddress(val);
              setLatLng(null);
            }}
            onSelect={(selectedAddress, lat, lng, city) => {
              setAddress(selectedAddress);
              setLatLng({ lat, lng });
              setCity(city);
              handleOnChange(lat, lng);
            }}
          />

          {latLng && (
            <p className="text-sm text-muted-foreground">
              Coordenadas: {latLng.lat.toFixed(5)}, {latLng.lng.toFixed(5)}
            </p>
          )}

          <Button
            type="submit"
            disabled={!latLng && !name && !taxId && !legalName}
          >
            Añadir Cliente
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
