"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import DynamicIcon from "@/components/icon";

interface Option {
  label: string;
  value: string;
  icon?: string;
}

interface ComboboxProps {
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  renderOption?: (option: Option, selected: boolean) => React.ReactNode;
  hasIcons?: boolean;
}

export default function Combobox({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled,
  className,
  renderOption,
  hasIcons = false,
}: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const selected = options.find((opt) => opt.value === value);
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  const showValue = isTyping ? search : selected?.label || "";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setSearch("");
        setIsTyping(false);
        setHoveredValue(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && filteredOptions.length > 0) {
      e.preventDefault();
      const firstOption = filteredOptions[0];
      onChange(firstOption.value);
      setSearch("");
      setIsTyping(false);
      setOpen(false);
    }
  };

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div className="flex items-center relative">
        {hasIcons && (
          <span className="absolute left-2">
            {selected?.icon ? (
              <DynamicIcon
                name={selected.icon}
                className="h-4 w-4 text-muted-foreground"
              />
            ) : (
              <DynamicIcon
                name="loader"
                className="h-4 w-4 text-muted-foreground animate-spin"
              />
            )}
          </span>
        )}
        <Input
          placeholder={placeholder}
          value={showValue}
          onChange={(e) => {
            const val = e.target.value;
            setSearch(val);
            setIsTyping(true);
            setOpen(true);
            if (val === "") {
              onChange("");
            }
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={cn({ "pl-8": hasIcons })}
        />
      </div>

      {open && (
        <div className="absolute z-10 mt-1 w-full rounded border bg-white shadow max-h-60 overflow-auto">
          {filteredOptions.length === 0 ? (
            <div className="px-3 py-2 text-sm text-muted-foreground">
              No options found.
            </div>
          ) : (
            filteredOptions.map((option) => {
              const isSelected = option.value === value;
              const isHovered = option.value === hoveredValue;

              return (
                <div
                  key={option.value}
                  className={cn(
                    "cursor-pointer px-3 py-2 flex items-center gap-2 hover:bg-gray-100"
                  )}
                  onMouseEnter={() => setHoveredValue(option.value)}
                  onMouseLeave={() => setHoveredValue(null)}
                  onClick={() => {
                    onChange(option.value);
                    setSearch("");
                    setIsTyping(false);
                    setOpen(false);
                  }}
                >
                  {renderOption ? (
                    renderOption(option, isSelected)
                  ) : (
                    <>
                      {hasIcons && option.icon && (
                        <DynamicIcon
                          name={option.icon}
                          className="h-4 w-4 text-muted-foreground"
                        />
                      )}
                      <span>{option.label}</span>
                      {isSelected && (
                        <span className="ml-auto text-sm text-green-600">
                          ✓
                        </span>
                      )}
                    </>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
