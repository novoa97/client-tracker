"use client";

import { useHeader } from "@/hooks/useHeader";
import { useEffect } from "react";

export function PageHeader({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children?: React.ReactNode;
}) {
  const { setHeader } = useHeader();

  useEffect(() => {
    setHeader(title, icon, children);
  }, [title, icon, children, setHeader]);

  return <></>;
}
