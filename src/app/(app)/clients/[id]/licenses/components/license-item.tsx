import { LicenseWithRelations } from "@/app/types";
import { Badge } from "@/components/ui/badge";
import { LicenseActions } from "./license-actions";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  license: LicenseWithRelations;
  selectLicense: () => void;
  editLicense: () => void;
  deleteLicense: () => void;
}

export function LicenseItem({
  license,
  selectLicense,
  editLicense,
  deleteLicense,
}: Props) {
  const t = useTranslations();

  return (
    <Card key={license.id} className="py-4">
      <CardContent className="flex flex-row items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium">{license.type.name}</h3>
            {license.subLicenses && license.subLicenses.length > 0 && (
              <Badge
                variant="outline"
                className="text-xs cursor-pointer"
                onClick={() => {
                  selectLicense();
                }}
              >
                {license.subLicenses.length} {t("Sublicenses")}
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">ID: {license.id}</p>
        </div>
        <LicenseActions
          license={license}
          onDelete={() => deleteLicense()}
          onEdit={() => editLicense()}
        />
      </CardContent>
    </Card>
  );
}
