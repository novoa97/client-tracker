import { Card, CardContent } from "@/components/ui/card";
import { File } from "@/generated/prisma";
import { deleteFile } from "../actions";
import { Button } from "@/components/ui/button";
import { Eye, Trash } from "lucide-react";
import { toast } from "sonner";
import DynamicIcon from "@/components/icon";
import { prettySize } from "@/lib/utils";
import { FileActions } from "./file-actions";

export default function FileItem({ file }: { file: File }) {
  const getIcon = (type: string) => {
    if (type.includes("image")) {
      return "file-image";
    } else if (type.includes("video")) {
      return "file-video";
    } else if (type.includes("audio")) {
      return "file-audio";
    } else if (type.includes("json")) {
      return "file-json";
    }
    return "file";
  };

  async function handleDelete() {
    try {
      await deleteFile(file.id);
      toast.success("File deleted");
    } catch {
      toast.error("Failed to delete file");
    }
  }

  const handleOpen = async () => {
    await window.open(`/files/${file.id}`, "_blank");
  };

  const handleDownload = async () => {
    await window.open(`/files/${file.id}?download=true`, "_blank");
  };

  return (
    <Card>
      <CardContent className="flex flex-row items-center gap-2">
        <div className="bg-muted rounded-md p-2">
          <DynamicIcon name={getIcon(file.type)} className="h-4 w-4" />
        </div>
        <div className="flex-1 flex flex-row gap-2 items-center justify-between">
          <div>
            <h1 className="text">{file.name}</h1>
            <p className="text-xs text-muted-foreground">
              {file.createdAt.toLocaleDateString("es-ES", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </p>
          </div>
          {/** Size */}
          <p className="text-sm text-muted-foreground">
            {prettySize(file.size ?? 0)}
          </p>
        </div>
        <div>
          <FileActions
            handleOpen={handleOpen}
            handleDownload={handleDownload}
            handleDelete={handleDelete}
          />
        </div>
      </CardContent>
    </Card>
  );
}
