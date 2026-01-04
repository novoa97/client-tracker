import { Card, CardContent } from "@/components/ui/card";
import { File } from "@/generated/prisma";
import { deleteFile } from "../actions";
import { toast } from "sonner";
import DynamicIcon from "@/components/icon";
import { prettySize } from "@/lib/utils";
import { FileActions } from "./file-actions";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function FileItem({ file }: { file: File }) {

  const router = useRouter();

  const getIconConfig = (type: string) => {
    if (type.includes("image")) {
      return { icon: "file-image", color: "text-violet-500", bg: "bg-violet-500/10" };
    } else if (type.includes("video")) {
      return { icon: "file-video", color: "text-blue-500", bg: "bg-blue-500/10" };
    } else if (type.includes("audio")) {
      return { icon: "file-audio", color: "text-amber-500", bg: "bg-amber-500/10" };
    } else if (type.includes("json")) {
      return { icon: "file-json", color: "text-emerald-500", bg: "bg-emerald-500/10" };
    } else if (type.includes("pdf")) {
      return { icon: "file-text", color: "text-red-500", bg: "bg-red-500/10" };
    }
    return { icon: "file", color: "text-muted-foreground", bg: "bg-muted" };
  };

  const iconConfig = getIconConfig(file.type);

  async function handleDelete() {
    try {
      await deleteFile(file.id);
      router.refresh()
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
    <Card className="group transition-all duration-200 hover:shadow-md hover:border-primary/20">
      <CardContent className="flex flex-row items-center gap-3 py-2">
        <div className={cn("rounded-md p-2 transition-colors", iconConfig.bg)}>
          <DynamicIcon
            name={iconConfig.icon}
            className={cn("h-5 w-5", iconConfig.color)}
          />
        </div>
        <div className="flex-1 min-w-0 flex flex-row gap-4 items-center justify-between">
          <div className="min-w-0 flex-1">
            <h3 className="font-medium text-sm truncate">{file.name}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {file.createdAt.toLocaleDateString("es-ES", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
          <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-md shrink-0">
            {prettySize(file.size ?? 0)}
          </span>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
