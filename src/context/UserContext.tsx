"use client";

import { User } from "@/generated/prisma";
import { useChangeLocale } from "@/hooks/useChangeLocale";
import { changeLanguage as changeLanguageDatabase } from "@/lib/auth";
import { createContext, useEffect, useState } from "react";

type UserContextType = {
  /** User of active session */
  user: User;
  /** Change the language of the user */
  changeLanguage: (code: string) => Promise<void>;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export function UserProvider({
  user: initialUser,
  children,
}: {
  user: User;
  children: React.ReactNode;
}) {
  const { locale, setLocale } = useChangeLocale();
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    if (locale !== user.lang) {
      setLocale(user.lang);
    }
  }, [user, locale, setLocale]);

  const changeLanguage = async (code: string) => {
    // Update the user in the database
    await changeLanguageDatabase(user.id, code);
    // Update the user in the context
    setUser({ ...user, lang: code });
    // Update locale app
    setLocale(code);
  };

  return (
    <UserContext.Provider value={{ user, changeLanguage }}>
      {children}
    </UserContext.Provider>
  );
}
