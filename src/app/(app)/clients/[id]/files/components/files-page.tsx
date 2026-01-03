"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { File } from "@/generated/prisma";
import { ClientPage } from "../../components/client-page";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plus, LoaderCircle } from "lucide-react";
import { useRef } from "react";
import { toast } from "sonner";
import FileItem from "./file-item";

interface Props {
  clientId: string;
  files: File[];
}

export default function FilesPage({ clientId, files }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleAddFileClick() {
    fileInputRef.current?.click();
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("clientId", clientId);

    try {
      setIsLoading(true);
      const response = await fetch("/files", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const result = await response.json();
      if (result.success) {
        toast.success(t("File uploaded successfully"));
        router.refresh();
      } else {
        toast.error("Upload failed");
      }
    } catch {
      toast.error("Upload failed");
    } finally {
      // Allow uploading the same file again by resetting the input value
      if (fileInputRef.current) fileInputRef.current.value = "";
      setIsLoading(false);
    }
  }

  return (
    <>
      <ClientPage
        icon="file"
        title="Files"
        subtitle="Files for this client"
        onBackClick={() => router.push("/clients/" + clientId)}
        actions={
          <>
            <input
              ref={fileInputRef}
              type="file"
              name="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <Button
              variant="default"
              onClick={handleAddFileClick}
              disabled={isLoading}
            >
              {isLoading ? (
                <LoaderCircle className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Plus className="h-3.5 w-3.5" />
              )}
              {isLoading ? t("Uploading") : t("Add File")}
            </Button>
          </>
        }
      >
        <div className="flex flex-col gap-2">
          {files.map((file) => (
            <FileItem key={file.id} file={file} />
          ))}
        </div>
      </ClientPage>
    </>
  );
}
