"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";
import { Client } from "@/generated/prisma";
import { saveNotes } from "../actions/save-notes";
import { useTranslations } from "next-intl";

interface NotesCardProps {
  client: Client;
}

export function ClientNotes({ client }: NotesCardProps) {
  const t = useTranslations();
  const [notes, setNotes] = useState(client.notes || "");
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">(
    "idle"
  );
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Debounce save function to avoid too many updates
  const debounceSave = (value: string) => {
    // Clear any existing timeout
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    setSaveStatus("saving");

    // Set a new timeout
    saveTimeoutRef.current = setTimeout(async () => {
      await saveNotes(client, value);
      setSaveStatus("saved");

      // Reset to idle after showing "saved" for 2 seconds
      setTimeout(() => {
        setSaveStatus("idle");
      }, 2000);
    }, 1000); // Save after 1 second of inactivity
  };

  // Handle notes change
  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setNotes(newValue);
    debounceSave(newValue);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Card className="w-full h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="mb-1">{t("Notes")}</CardTitle>
          <CardDescription>
            {t("Additional information about this client")}
          </CardDescription>
        </div>
        {saveStatus === "saving" && (
          <span className="text-xs text-muted-foreground animate-pulse">
            {t("Saving")}...
          </span>
        )}
        {saveStatus === "saved" && (
          <div className="flex items-center text-xs text-green-600">
            <CheckCircle2 className="h-3 w-3" />
            <span className="ml-1">{t("Saved")} </span>
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-1">
        <Textarea
          value={notes}
          onChange={handleNotesChange}
          placeholder={t("Add notes about this client")}
          className="min-h-[120px]"
        />
      </CardContent>
    </Card>
  );
}
