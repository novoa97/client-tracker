"use client";

import { LucideIcon, Map, Users, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Section {
  href: string;
  label: string;
  icon: LucideIcon;
}

interface Props {
  section?: Section[];
}

export const navigationLinks = [
  { href: "/", label: "Map", icon: Map },
  { href: "/clients", label: "Clients", icon: Users },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function BottomNav({ section }: Props) {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-t shadow-md flex justify-around items-center h-14">
      {navigationLinks.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={`flex flex-col items-center text-xs ${
            pathname === href ? "text-black font-semibold" : "text-gray-500"
          }`}
        >
          <Icon size={20} />
        </Link>
      ))}
    </nav>
  );
}
