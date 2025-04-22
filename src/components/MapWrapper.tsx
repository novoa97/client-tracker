// components/MapWrapper.tsx
"use client";

import dynamic from "next/dynamic";
import { ReactNode, FC } from "react";

// Declaramos explícitamente el tipo de props
const NoSSR = dynamic(
  () =>
    Promise.resolve(({ children }: { children: ReactNode }) => <>{children}</>),
  {
    ssr: false,
  }
) as FC<{ children: ReactNode }>;

export default function MapWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <div className={className}>
      <NoSSR>{children}</NoSSR>
    </div>
  );
}
