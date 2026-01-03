import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Download, Eye, MoreVertical, Trash } from "lucide-react";

interface Props {
  handleOpen: () => void;
  handleDownload: () => void;
  handleDelete: () => Promise<void>;
}

export function FileActions({
  handleOpen,
  handleDownload,
  handleDelete,
}: Props) {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-36">
          <DropdownMenuItem onClick={() => handleOpen()}>
            <Eye className="h-4 w-4" />
            Open
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDownload()}>
            <Download className="h-4 w-4" />
            Download
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-red-500 focus:text-red-500"
            onClick={() => handleDelete()}
          >
            <Trash className="h-4 w-4 text-red-500" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
