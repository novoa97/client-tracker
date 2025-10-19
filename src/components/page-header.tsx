"use client";

import { useHeader } from "@/hooks/useHeader";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

interface Props {
  title: string;
  icon: string;
  children?: React.ReactNode;
  buttonBack?: boolean;
}

export function PageHeader({ title, icon, children, buttonBack }: Props) {
  const t = useTranslations();
  const { setHeader } = useHeader();

  useEffect(() => {
    setHeader(t(title), icon, buttonBack, children);
  }, [t, title, icon, children, buttonBack, setHeader]);

  return <></>;
}
