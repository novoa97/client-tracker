import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  children?: React.ReactNode;
}

export function Header({ icon: Icon, title, children }: Props) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <Icon strokeWidth={2.5}></Icon>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="flex gap-2">{children}</div>
    </div>
  );
}
