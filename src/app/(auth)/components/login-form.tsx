"use client";

import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { login } from "../actions";
import { useTranslations } from "next-intl";

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type FormData = z.infer<typeof schema>;

export default function LoginForm() {
  const t = useTranslations();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setError(null);
    try {
      setIsSubmitting(true);
      const result = await login(data);
      console.log(result);
      if (result.success) router.push("/");
      else {
        setError(result.error || "Failed to login");
        setIsSubmitting(false);
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error(err);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 p-3 text-sm text-red-500">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="username">{t("Username")}</Label>
        <Input
          id="username"
          type="text"
          placeholder={t("Enter your username")}
          {...register("username")}
        />
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">{t("Password")}</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder={t("Enter your password")}
            {...register("password")}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? t("Hide password") : t("Show password")}
          >
            {showPassword ? (
              <EyeOffIcon className="h-4 w-4 text-gray-500" />
            ) : (
              <EyeIcon className="h-4 w-4 text-gray-500" />
            )}
          </Button>
        </div>
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full mt-2" disabled={isSubmitting}>
        {isSubmitting ? t("Logging in") : t("Login")}
      </Button>
    </form>
  );
}
