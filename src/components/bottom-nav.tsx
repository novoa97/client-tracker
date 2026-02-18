"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DynamicIcon from "./icon";

interface Section {
  href: string;
  label: string;
  icon: string;
}

interface Props {
  section?: Section[];
}

export default function BottomNav({ section }: Props) {
  const pathname = usePathname();

  const path = "/" + pathname.split("/")[1];

  return (
    <nav className="bg-background border-t border-border shadow-sm flex justify-around items-center h-14">
      {section?.map(({ href, icon }) => (
        <Link
          key={href}
          href={href}
          className={`flex flex-col items-center text-xs ${
            path === href
              ? "text-primary font-semibold"
              : "text-muted-foreground"
          }`}
        >
          <DynamicIcon name={icon} className="w-6 h-6" />
        </Link>
      ))}
    </nav>
  );
}
