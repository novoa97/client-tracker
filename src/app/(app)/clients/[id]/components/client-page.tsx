"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, Upload } from "lucide-react";
import { Empty, EmptyMedia, EmptyTitle, EmptyDescription } from "@/components/ui/empty";
import { useTranslations } from "next-intl";
import DynamicIcon from "@/components/icon";
import { cn } from "@/lib/utils";

interface Props {
  icon: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  addAction?: () => void;
  empty?: boolean;
  emptyIcon?: React.ReactNode;
  emptyMessage?: string | undefined;
  emptyDescription?: string | undefined;
  onBackClick: () => void;
  onDrop?: (files: File[]) => void;
}

export function ClientPage({
  icon,
  title,
  subtitle,
  children,
  empty,
  emptyIcon,
  emptyMessage,
  emptyDescription,
  actions,
  addAction,
  onBackClick,
  onDrop,
}: Props) {
  const t = useTranslations();
  const [isDragging, setIsDragging] = useState(false);

  function handleDragOver(e: React.DragEvent) {
    if (!onDrop) return;
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }

  function handleDragLeave(e: React.DragEvent) {
    if (!onDrop) return;
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }

  async function handleDrop(e: React.DragEvent) {
    if (!onDrop) return;
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles && droppedFiles.length > 0) {
      onDrop(Array.from(droppedFiles));
    }
  }

  return (
    <div className="flex flex-col h-full w-full p-4 pb-0 md:p-8 min-h-0">
      {/* Header */}
      <div className="mb-4">
        {/* Mobile version */}
        <div className="flex flex-row items-center md:hidden gap-4">
          <div>
            <Button variant="outline" onClick={onBackClick}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-col">
            <h1 className="text font-bold">{title}</h1>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        {/* Desktop version */}
        <div className="flex flex-row items-center justify-between hidden md:flex">
          <div className="flex flex-row gap-2 items-center">
            <div>
              <div className="bg-muted rounded-md p-2 h-10 w-10 flex items-center justify-center">
                <DynamicIcon name={icon} className="h-5 w-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text font-bold">{title}</h1>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
          </div>
          <div>
            {addAction && (
              <Button
                variant="default"
                className="md:flex hidden"
                onClick={addAction}
              >
                <Plus className="h-3.5 w-3.5" />
                {t("Add")}
              </Button>
            )}
            {actions ? actions : null}
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className={cn(
          "relative flex flex-col h-full w-full min-h-0 rounded-lg transition-colors",
          isDragging && "bg-primary/5 border-2 border-dashed border-primary"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {isDragging && (
          <div className="absolute inset-0 flex items-center justify-center bg-primary/5 rounded-lg z-10">
            <div className="flex flex-col items-center gap-2 text-primary">
              <Upload className="h-8 w-8" />
              <p className="text-sm font-medium">{t("Drop files here")}</p>
            </div>
          </div>
        )}
        <div className="flex-1 min-h-0 overflow-y-auto">
          {empty && !isDragging ? (
            <Empty className="w-full h-full border border-dashed gap-1">
              <EmptyMedia variant="icon">{emptyIcon}</EmptyMedia>
              <EmptyTitle>{emptyMessage}</EmptyTitle>
              <EmptyDescription>{emptyDescription}</EmptyDescription>
            </Empty>
          ) : (
            children
          )}
        </div>
        {/* Button */}
        {addAction && (
          <div className="flex md:hidden w-full my-2 justify-center">
            <Button variant="default" className="w-full" onClick={addAction}>
              <Plus className="h-3.5 w-3.5" />
              {t("Add")}
            </Button>
          </div>
        )}
        <div className="flex md:hidden w-full my-2 justify-center">
          {actions ? actions : null}
        </div>
      </div>
    </div>
  );
}
