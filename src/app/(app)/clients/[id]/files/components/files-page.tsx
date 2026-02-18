"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { File } from "@/generated/prisma";
import { ClientPage } from "../../components/client-page";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Upload, LoaderCircle, FileIcon } from "lucide-react";
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

  async function uploadFile(file: globalThis.File) {
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
        toast.error(result.message ?? "Upload failed");
      }
    } catch {
      toast.error("Upload failed");
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = "";
      setIsLoading(false);
    }
  }

  async function uploadFiles(files: globalThis.File[]) {
    for (const file of files) {
      await uploadFile(file);
    }
    router.refresh();
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length === 0) return;
    await uploadFiles(Array.from(e.target.files));
  }

  return (
    <>
      <ClientPage
        icon="file"
        title="Files"
        empty={files.length === 0}
        emptyMessage={t("No files uploaded yet")}
        emptyDescription={t("Drag and drop files here or click on the button")}
        emptyIcon={<FileIcon />}
        subtitle="Files for this client"
        onBackClick={() => router.push("/clients/" + clientId)}
        onDrop={uploadFiles}
        actions={
          <>
            <input
              ref={fileInputRef}
              type="file"
              name="file"
              multiple
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
                <Upload className="h-3.5 w-3.5" />
              )}
              {isLoading ? t("Uploading") : t("Upload File")}
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
