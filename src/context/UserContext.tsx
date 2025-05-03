"use client";

import { User } from "@/generated/prisma";
import { createContext, useContext, useState } from "react";

type UserContextType = {
  /** Active user */
  user: User;
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
  const [user] = useState(initialUser);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
