import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface Props {
  onSubmit: () => void;
}

export function ClientDelete({ onSubmit }: Props) {
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
