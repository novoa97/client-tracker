"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface CalendarInputProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  buttonClassName?: string;
  label?: string;
  id?: string;
}

export function CalendarInput({
  value,
  onChange,
  disabled = false,
  className,
  buttonClassName,
  label,
  id,
}: CalendarInputProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <Input
          id={id}
          type="date"
          value={value ? value.toISOString().split("T")[0] : ""}
          onChange={(e) => {
            const dateValue = e.target.value
              ? new Date(e.target.value)
              : undefined;
            onChange?.(dateValue);
          }}
          disabled={disabled}
          className={cn(
            "pl-10 pr-10 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none",
            buttonClassName
          )}
        />
        <button
          type="button"
          onClick={() => {
            const input = document.getElementById(
              id || "date-input"
            ) as HTMLInputElement;
            if (input && "showPicker" in input) {
              (input as HTMLInputElement).showPicker();
            }
          }}
          disabled={disabled}
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <CalendarIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
