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
    <nav className="bg-white border-t shadow-md flex justify-around items-center h-14">
      {section?.map(({ href, icon }) => (
        <Link
          key={href}
          href={href}
          className={`flex flex-col items-center text-xs ${
            path === href ? "text-blue-600 font-semibold " : "text-gray-500"
          }`}
        >
          <DynamicIcon name={icon} className="w-6 h-6" />
        </Link>
      ))}
    </nav>
  );
}
