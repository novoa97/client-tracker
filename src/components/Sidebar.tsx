"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Map, Users, Settings } from "lucide-react";

const links = [
  { href: "/", label: "Map", icon: Map },
  { href: "/clients", label: "Clients", icon: Users },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r p-4 space-y-4 min-h-screen">
      <h1 className="text-lg font-bold mb-6">My App</h1>
      <nav className="flex flex-col gap-2">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "flex items-center gap-2 text-sm px-3 py-2 rounded hover:bg-blue-50 transition",
              pathname === href
                ? "text-blue-600 font-semibold bg-blue-100"
                : "text-gray-700"
            )}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
