"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Map, Users, Settings, Building2 } from "lucide-react";
import { useTranslations } from "next-intl";
const links = [
  { href: "/", label: "Map", icon: Map },
  { href: "/clients", label: "Clients", icon: Users },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const t = useTranslations();
  const pathname = usePathname();

  const path = "/" + pathname.split("/")[1];

  return (
    <aside className="w-64 bg-white border-r p-4 space-y-4 min-h-screen">
      <h1 className="text-lg font-bold mb-6">ClientTracker</h1>
      <nav className="flex flex-col gap-2">
        {links.map(({ href, label, icon: Icon }) => {
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex items-center gap-2 text-sm px-3 py-2 rounded hover:bg-blue-50 transition",
                path === href
                  ? "text-blue-600 font-semibold bg-blue-100"
                  : "text-gray-700"
              )}
            >
              <Icon className="w-4 h-4" />
              <span>{t(label)}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
