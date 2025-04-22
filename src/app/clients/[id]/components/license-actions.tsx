// /src/app/clients/components/table/client-actions.tsx
"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { MoreVertical, Trash2 } from "lucide-react";
import { startTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { License } from "@/generated/prisma";

type Props = {
  license: License;
  onDelete: (id: string) => Promise<void>;
};

export function LicenseActions({ license, onDelete }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleDelete = () => {
    startTransition(() => {
      onDelete(license.id).then(() => {
        router.refresh();
        setOpen(false);
      });
    });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreVertical className="h-4 w-4" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-36">
          <AlertDialogTrigger asChild>
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault(); // evita que cierre el menú antes de abrir el diálogo
                setOpen(true);
              }}
              className="text-red-600 focus:text-red-600"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Eliminar
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Eliminar licencia?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. ¿Seguro que quieres eliminar la
            licencia <strong>{license.id}</strong>?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              handleDelete();
              setOpen(false);
            }}
          >
            Confirmar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
