"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { useTranslations } from "next-intl";
import DynamicIcon from "./icon";
import Image from "next/image";

interface Props {
  section?: {
    href: string;
    label: string;
    icon: string;
  }[];
}

export function Sidebar({ section }: Props) {
  const t = useTranslations();
  const pathname = usePathname();

  const path = "/" + pathname.split("/")[1];

  return (
    <aside className="w-64 bg-white border-r p-4 space-y-4 min-h-screen">
      <div className="flex flex-row items-center gap-2">
        <Image
          src="/logo.png"
          alt="ClientTracker"
          width={32}
          height={32}
          className="mb-6"
        />
        <h1 className="text-lg font-bold mb-6">ClientTracker</h1>
      </div>
      <nav className="flex flex-col gap-2">
        {section?.map(({ href, label, icon }) => {
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
              <DynamicIcon name={icon} className="w-4 h-4" />
              <span>{t(label)}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
