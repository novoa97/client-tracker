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

export function GeneralCard() {
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();
  const { user, changeLanguage } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isChangePasswordDialogOpen, setIsChangePasswordDialogOpen] =
    useState(false);

  async function handleChange(language: string) {
    await changeLanguage(language);
    toast.success(t("Language changed successfully"), { duration: 2000 });
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
        <CardContent className="w-full flex-1 overflow-y-auto">
          <div>
            <label className="text-sm font-medium">{t("Language")}</label>
            <p className="text-muted-foreground text-sm">
              {t(
                "This is the language that will be used throughout the application"
              )}
            </p>
            <Select onValueChange={handleChange} defaultValue={locale}>
              <SelectTrigger className="text-sm mt-4 w-full md:w-auto">
                <SelectValue placeholder={t("Select a language")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="gl">Galego</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator className="my-4 h-px w-full bg-border" />
          <div>
            <Label className="text-sm font-medium">
              {t("Change Password")}
            </Label>
            <p className="text-muted-foreground text-sm">
              {t("Change your password to keep your account secure")}
            </p>
            <Button
              variant="outline"
              className="text-sm mt-4 w-full md:w-auto"
              onClick={() => setIsChangePasswordDialogOpen(true)}
            >
              {t("Change Password")}
            </Button>
            <DialogContainer
              open={isChangePasswordDialogOpen}
              onOpenChange={setIsChangePasswordDialogOpen}
              title={t("Change Password")}
              description={t(
                "Change your password to keep your account secure"
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
