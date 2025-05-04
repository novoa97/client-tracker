"use client";

import { LoaderIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { FC, memo } from "react";

type DynamicIconProps = {
  name: string;
  className?: string;
  style?: React.CSSProperties;
};

const DynamicIcon: FC<DynamicIconProps> = memo(({ name, className, style }) => {
  const normalizedName = name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  if (normalizedName === "Icon") return <LoaderIcon className={className} />;

  const MaybeIcon = Icons[normalizedName as keyof typeof Icons];

  // Check if it's a React component (forwardRef has $$typeof)
  const isValidIcon =
    MaybeIcon && typeof MaybeIcon === "object" && "$$typeof" in MaybeIcon;

  if (!isValidIcon) {
    return <LoaderIcon className={className} style={style} />;
  }

  const IconComponent = MaybeIcon as unknown as FC<{
    className?: string;
    style?: React.CSSProperties;
  }>;

  return <IconComponent className={className} style={style} />;
});

DynamicIcon.displayName = "DynamicIcon";

export default DynamicIcon;
