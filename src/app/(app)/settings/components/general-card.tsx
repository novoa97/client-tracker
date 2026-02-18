"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale, useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ChangePasswordForm from "./change-password-form";
import { LogOut } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DialogContainer } from "@/components/dialog-container";
import { useState } from "react";
import { useUser } from "@/hooks/useUser";
import { changePassword } from "@/lib/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useMapStyle } from "@/hooks/useMapStyle";
import { MAP_STYLE_PRESETS } from "@/lib/map-styles";

export function GeneralCard() {
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();
  const { theme, setTheme } = useTheme();
  const { styleId: mapStyleId, setStyleId: setMapStyleId } = useMapStyle();
  const { user, changeLanguage } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isChangePasswordDialogOpen, setIsChangePasswordDialogOpen] =
    useState(false);

  async function handleChange(language: string) {
    await changeLanguage(language);
    toast.success(t("Language changed successfully"), { duration: 2000 });
  }

  function handleThemeChange(value: string) {
    setTheme(value);
    toast.success(t("Theme changed successfully"), { duration: 2000 });
  }

  function handleMapStyleChange(value: string) {
    setMapStyleId(value as "carto" | "openstreetmap" | "openstreetmap3d");
    toast.success(t("Map style changed successfully"), { duration: 2000 });
  }

  async function handleChangePassword(data: {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
  }) {
    setError(null);
    setIsLoading(true);
    const result = await changePassword(user!.id, data);
    if (result.success) {
      setIsChangePasswordDialogOpen(false);
      toast.success(t("Password changed successfully"), { duration: 2000 });
    } else {
      setError(result.error!);
    }
    setIsLoading(false);
  }

  async function handleLogout() {
    router.push("/logout");
  }

  return (
    <>
      <Card className="flex flex-1 flex-col md:flex-none min-h-0">
        <CardHeader>
          <CardTitle>{t("General Settings")}</CardTitle>
          <CardDescription>
            {t("Configure general application settings")}
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full flex-1 overflow-y-auto space-y-6">
          <div className="space-y-4">
            <div className="grid gap-1">
              <h3 className="text-sm font-semibold text-foreground">
                {t("Appearance")}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t("Theme and map style for the application")}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 mt-2">
              <div className="space-y-2">
                <Label className="text-sm font-medium">{t("Theme")}</Label>
                <Select
                  value={theme ?? "system"}
                  onValueChange={handleThemeChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t("Select a theme")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">{t("Light")}</SelectItem>
                    <SelectItem value="dark">{t("Dark")}</SelectItem>
                    <SelectItem value="system">{t("System")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">{t("Map style")}</Label>
                <Select value={mapStyleId} onValueChange={handleMapStyleChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t("Select a map style")} />
                  </SelectTrigger>
                  <SelectContent>
                    {MAP_STYLE_PRESETS.map((preset) => (
                      <SelectItem key={preset.id} value={preset.id}>
                        {t(preset.labelKey)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label className="text-sm font-medium">{t("Language")}</Label>
            <p className="text-muted-foreground text-sm">
              {t(
                "This is the language that will be used throughout the application",
              )}
            </p>
            <Select onValueChange={handleChange} defaultValue={locale}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder={t("Select a language")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="gl">Galego</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label className="text-sm font-medium">
              {t("Change Password")}
            </Label>
            <p className="text-muted-foreground text-sm">
              {t("Change your password to keep your account secure")}
            </p>
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => setIsChangePasswordDialogOpen(true)}
            >
              {t("Change Password")}
            </Button>
            <DialogContainer
              open={isChangePasswordDialogOpen}
              onOpenChange={setIsChangePasswordDialogOpen}
              title={t("Change Password")}
              description={t(
                "Change your password to keep your account secure",
              )}
            >
              <ChangePasswordForm
                isLoading={isLoading}
                onSubmit={handleChangePassword}
                error={error}
              />
            </DialogContainer>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <div>
            <Button
              variant="link"
              className="flex items-center justify-center text-grey-500 gap-2 text-sm px-3 py-2 rounded transition"
              onClick={handleLogout}
            >
              <span>{t("Logout")}</span>
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
      <div className="text-center pt-4">
        <p className="text-xs text-muted-foreground">
          v{process.env.NEXT_PUBLIC_APP_VERSION}
        </p>
      </div>
    </>
  );
}
