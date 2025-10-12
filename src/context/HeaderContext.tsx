"use client";

import { createContext, useState, useCallback } from "react";

type HeaderContextType = {
  icon: string;
  title: string;
  children?: React.ReactNode;
  setHeader: (title: string, icon: string, children?: React.ReactNode) => void;
};

export const HeaderContext = createContext<HeaderContextType | undefined>(
  undefined
);

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState<string>("");
  const [childrenHeader, setChildrenHeader] = useState<
    React.ReactNode | undefined
  >(undefined);

  const setHeader = useCallback(
    (title: string, icon: string, children?: React.ReactNode) => {
      setTitle(title);
      setIcon(icon);
      setChildrenHeader(children);
    },
    []
  );

  return (
    <HeaderContext.Provider
      value={{
        title,
        setHeader,
        icon,
        children: childrenHeader,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
