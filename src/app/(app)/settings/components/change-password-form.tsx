"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const schema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters"),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function ChangePasswordForm({
  isLoading,
  onSubmit,
  error,
}: {
  isLoading: boolean;
  onSubmit: (data: FormData) => Promise<void>;
  error: string | null;
}) {
  const t = useTranslations();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 p-3 text-sm text-red-500">
          {t(error)}
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="currentPassword">{t("Current Password")}</Label>
        <Input
          id="currentPassword"
          type="password"
          {...register("currentPassword")}
        />
        {errors.currentPassword && (
          <p className="text-sm text-red-500">
            {errors.currentPassword.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="newPassword">{t("New Password")}</Label>
        <div className="relative">
          <Input
            id="newPassword"
            type={showPassword ? "text" : "password"}
            {...register("newPassword")}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOffIcon className="h-4 w-4 text-gray-500" />
            ) : (
              <EyeIcon className="h-4 w-4 text-gray-500" />
            )}
          </Button>
        </div>
        {errors.newPassword && (
          <p className="text-sm text-red-500">{errors.newPassword.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmNewPassword">{t("Confirm New Password")}</Label>
        <Input
          id="confirmNewPassword"
          type={showPassword ? "text" : "password"}
          {...register("confirmNewPassword")}
        />
        {errors.confirmNewPassword && (
          <p className="text-sm text-red-500">
            {errors.confirmNewPassword.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? t("Changing Password") : t("Change Password")}
      </Button>
    </form>
  );
}
