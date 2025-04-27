"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { HexColorPicker } from "react-colorful";

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
}

export function ColorPicker({ value = "#000000", onChange }: ColorPickerProps) {
  const [hexColor, setHexColor] = useState(value);
  const [inputValue, setInputValue] = useState(value);
  const [open, setOpen] = useState(false);

  // Initialize color from props
  useEffect(() => {
    if (value && value !== hexColor) {
      setHexColor(value);
      setInputValue(value);
    }
  }, [value, hexColor]);

  // Handle color change from the picker
  const handleColorChange = (newColor: string) => {
    setHexColor(newColor);
    setInputValue(newColor);
    onChange(newColor);
  };

  // Handle hex input change
  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Always update the input value for immediate feedback
    const newValue = e.target.value;
    setInputValue(newValue);

    // Format and validate the hex value
    let formattedValue = newValue;
    if (!formattedValue.startsWith("#") && formattedValue.length > 0) {
      formattedValue = `#${formattedValue}`;
    }

    // Only update the color if it's a valid hex color
    if (/^#[0-9A-F]{6}$/i.test(formattedValue)) {
      setHexColor(formattedValue);
      onChange(formattedValue);
    }
  };

  // Handle input blur
  const handleBlur = () => {
    // When the input loses focus, reformat it to a valid hex color
    if (/^#[0-9A-F]{6}$/i.test(inputValue)) {
      // Valid hex color, keep it as is
      return;
    } else if (/^[0-9A-F]{6}$/i.test(inputValue)) {
      // Valid hex without #, add it
      const formattedValue = `#${inputValue}`;
      setInputValue(formattedValue);
      setHexColor(formattedValue);
      onChange(formattedValue);
    } else {
      // Invalid hex, revert to current color
      setInputValue(hexColor);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen} modal={true}>
      <PopoverTrigger asChild>
        <div className="relative flex h-12 w-full cursor-pointer items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
          <div
            className="mr-2 h-6 w-6 rounded border border-input shadow-sm"
            style={{ backgroundColor: hexColor }}
          />
          <span className="font-mono">{hexColor}</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0" sideOffset={5}>
        <div className="flex flex-col">
          {/* React Colorful Color Picker */}
          <div className="w-full">
            <HexColorPicker
              color={hexColor}
              onChange={handleColorChange}
              style={{ width: "100%", height: "240px" }}
            />
          </div>

          <div className="p-0">
            <Input
              value={inputValue}
              onChange={handleHexChange}
              onBlur={handleBlur}
              className="font-mono text-base text-center uppercase rounded-none rounded-b-md border-0 border-t"
              maxLength={7}
              placeholder="#000000"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
