"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale, useTranslations } from "next-intl";
import { useChangeLocale } from "@/hooks/useChangeLocale";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function GeneralCard() {
  const t = useTranslations();
  const locale = useLocale();
  const { setLocale } = useChangeLocale();

  function handleChange(language: string) {
    setLocale(language);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("General Settings")}</CardTitle>
        <CardDescription>
          {t("Configure general application settings")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <label className="text-sm font-medium">{t("Language")}</label>
          <Select onValueChange={handleChange} defaultValue={locale}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder={t("Select a language")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="gl">Galego</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-muted-foreground text-sm">
            {t(
              "This is the language that will be used throughout the application"
            )}
          </p>
        </div>
        <div className="text-center pt-4">
          <p className="text-xs text-muted-foreground">
            v{process.env.NEXT_PUBLIC_APP_VERSION}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
