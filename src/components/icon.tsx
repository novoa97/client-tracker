"use client";

import { LoaderIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { FC, memo } from "react";

type DynamicIconProps = {
  name: string;
  className?: string;
};

const DynamicIcon: FC<DynamicIconProps> = memo(({ name, className }) => {
  const normalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  const MaybeIcon = Icons[normalizedName as keyof typeof Icons];

  // Check if it's a React component (forwardRef has $$typeof)
  const isValidIcon =
    MaybeIcon && typeof MaybeIcon === "object" && "$$typeof" in MaybeIcon;

  if (!isValidIcon) {
    console.error(
      `Icon "${name}" not found or is not a valid icon in lucide-react`
    );
    return <LoaderIcon className={className} />;
  }

  const IconComponent = MaybeIcon as unknown as FC<{ className?: string }>;

  return <IconComponent className={className} />;
});

DynamicIcon.displayName = "DynamicIcon";

export default DynamicIcon;
