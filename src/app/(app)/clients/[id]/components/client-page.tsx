import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

interface Props {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  empty?: boolean;
  emptyIcon?: React.ReactNode;
  emptyMessage?: string | undefined;
  onBackClick: () => void;
}

export function ClientPage({
  title,
  subtitle,
  children,
  buttonText,
  empty,
  emptyIcon,
  emptyMessage,
  onButtonClick,
  onBackClick,
}: Props) {
  const router = useRouter();

  return (
    <div className="flex flex-col h-full w-full p-8 min-h-0">
      {/* Header */}
      <div className="mb-4">
        {/* Mobile version */}
        <div className="flex flex-row items-center md:hidden gap-4">
          <div>
            <Button variant="outline" onClick={onBackClick}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-col">
            <h1 className="text font-bold">{title}</h1>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        {/* Desktop version */}
        <div className="flex flex-row items-center justify-between hidden md:flex">
          <div className="flex flex-col">
            <h1 className="text font-bold">{title}</h1>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
          <div>
            {buttonText && (
              <Button
                variant="default"
                className="md:block hidden"
                onClick={onButtonClick}
              >
                {buttonText}
              </Button>
            )}
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col h-full w-full min-h-0">
        <div className="flex-1 mb-4 min-h-0">
          {empty ? (
            <Empty className="w-full h-full border border-dashed">
              <EmptyMedia variant="icon">{emptyIcon}</EmptyMedia>
              <EmptyHeader>{emptyMessage}</EmptyHeader>
            </Empty>
          ) : (
            children
          )}
        </div>
        {/* Button */}
        {buttonText && (
          <div className="flex md:hidden w-full">
            <Button
              variant="default"
              className="w-full"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
