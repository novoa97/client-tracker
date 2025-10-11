"use client";

import { ClientPage } from "../components/client-page";
import { RichTextEditor } from "@/components/rich-text-editor";
import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Save, FileText } from "lucide-react";
import { saveNotes, getClientNotes } from "../actions";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Skeleton } from "@/components/ui/skeleton";

export default function ClientNotesPage() {
  const params = useParams();
  const t = useTranslations();
  const clientId = params.id as string;
  const router = useRouter();

  // Auto-save configuration
  const AUTO_SAVE_DELAY = 1000; // 2 seconds in milliseconds

  const [notes, setNotes] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [autoSaveStatus, setAutoSaveStatus] = useState<
    "idle" | "saving" | "saved" | "error"
  >("idle");
  const [lastSavedNotes, setLastSavedNotes] = useState("");

  const autoSaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isInitialLoadRef = useRef(true);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const existingNotes = await getClientNotes(clientId);
        const notesContent = existingNotes || "";
        setNotes(notesContent);
        setLastSavedNotes(notesContent);
      } catch (error) {
        console.error("Error loading notes:", error);
        toast.error("Failed to load notes");
      } finally {
        setIsLoading(false);
        isInitialLoadRef.current = false;
      }
    };

    loadNotes();
  }, [clientId]);

  // Auto-save functionality
  const autoSave = useCallback(
    async (notesToSave: string) => {
      if (notesToSave === lastSavedNotes || isInitialLoadRef.current) {
        return;
      }

      setAutoSaveStatus("saving");
      try {
        await saveNotes(clientId, notesToSave);
        setLastSavedNotes(notesToSave);
        setAutoSaveStatus("saved");
        toast.success("Notes auto-saved");
      } catch (error) {
        console.error("Error auto-saving notes:", error);
        setAutoSaveStatus("error");
        toast.error("Failed to auto-save notes");
      }
    },
    [clientId, lastSavedNotes]
  );

  // Debounced auto-save effect
  useEffect(() => {
    if (isInitialLoadRef.current) {
      return;
    }

    // Clear existing timeout
    if (autoSaveTimeoutRef.current) {
      clearTimeout(autoSaveTimeoutRef.current);
    }

    // Set new timeout for auto-save
    autoSaveTimeoutRef.current = setTimeout(() => {
      autoSave(notes);
    }, AUTO_SAVE_DELAY);

    // Cleanup timeout on unmount or when notes change
    return () => {
      if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current);
      }
    };
  }, [notes, autoSave]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await saveNotes(clientId, notes);
      setLastSavedNotes(notes);
      setAutoSaveStatus("saved");
      toast.success("Notes saved successfully");
    } catch (error) {
      console.error("Error saving notes:", error);
      toast.error("Failed to save notes");
    } finally {
      setIsSaving(false);
    }
  };

  const handleBack = () => {
    router.push("/clients/" + clientId);
  };

  if (isLoading) {
    return;
  }

  return (
    <ClientPage
      title={t("Notes")}
      subtitle={t("Additional information about this client")}
      onBackClick={handleBack}
    >
      <RichTextEditor
        content={notes}
        onChange={setNotes}
        placeholder="Write your client notes here... You can use formatting, lists, links, and more. Changes are automatically saved."
        className="h-full"
      />
    </ClientPage>
  );
}
