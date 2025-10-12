import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";

interface Props {
  onSubmit: () => void;
  isLoading: boolean;
}

export function ClientDelete({ onSubmit, isLoading }: Props) {
  const t = useTranslations();
  return (
    <>
      <div>{t("Are you sure you want to delete this client?")}</div>
      <div className="flex justify-end mt-4">
        <Button variant="destructive" onClick={onSubmit}>
          {t("Delete")}
        </Button>
      </div>
    </>
  );
}
