"use client";

import { useHeader } from "@/hooks/useHeader";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export function PageHeader({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children?: React.ReactNode;
}) {
  const t = useTranslations();
  const { setHeader } = useHeader();

  useEffect(() => {
    setHeader(t(title), icon, children);
  }, [title, icon, children, setHeader]);

  return <></>;
}
