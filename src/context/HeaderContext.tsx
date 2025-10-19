"use client";

import { createContext, useState, useCallback } from "react";

type HeaderContextType = {
  icon: string;
  title: string;
  buttonBack?: boolean;
  children?: React.ReactNode;
  setHeader: (
    title: string,
    icon: string,
    buttonBack?: boolean,
    children?: React.ReactNode
  ) => void;
};

export const HeaderContext = createContext<HeaderContextType | undefined>(
  undefined
);

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState<string>("");
  const [buttonBack, setButtonBack] = useState<boolean>(false);
  const [childrenHeader, setChildrenHeader] = useState<
    React.ReactNode | undefined
  >(undefined);

  const setHeader = useCallback(
    (
      title: string,
      icon: string,
      buttonBack?: boolean,
      children?: React.ReactNode
    ) => {
      setTitle(title);
      setIcon(icon);
      setChildrenHeader(children);
      setButtonBack(buttonBack || false);
    },
    []
  );

  return (
    <HeaderContext.Provider
      value={{
        title,
        setHeader,
        icon,
        buttonBack,
        children: childrenHeader,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
