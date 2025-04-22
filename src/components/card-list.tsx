import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

type CardListProps = {
  title: string;
  description: string;
  buttonText: string;
  emptyMessage: string;
  headers?: string[]; // solo para tabla
  onCreateClick?: () => void;
  variant?: "table" | "list";
  children: React.ReactNode;
};

export const CardList = ({
  title,
  description,
  buttonText,
  emptyMessage,
  headers = [],
  onCreateClick,
  variant = "table",
  children,
}: CardListProps) => {
  const t = useTranslations();
  const hasRows = React.Children.count(children) > 0;

  return (
    <Card className="flex-1 flex flex-col min-h-0">
      <CardHeader className="flex justify-between items-start flex-wrap gap-4">
        <div className="flex-1 min-w-0">
          <CardTitle className="mb-1">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="hidden md:block">
          <Button className="whitespace-nowrap" onClick={onCreateClick}>
            <Plus className="mr-2 h-4 w-4" />
            {buttonText}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-auto">
        {hasRows ? (
          variant === "table" ? (
            <div className="space-y-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    {headers.map((header, index) => (
                      <TableHead key={index}>{header}</TableHead>
                    ))}
                    <TableHead className="w-[100px]">{t("Actions")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>{children}</TableBody>
              </Table>
            </div>
          ) : (
            <div className="space-y-4">{children}</div>
          )
        ) : (
          <div className="flex h-full items-center justify-center rounded-md border border-dashed">
            <p className="text-sm text-muted-foreground">{emptyMessage}</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="md:hidden">
        <Button className="w-full" onClick={onCreateClick}>
          <Plus className="mr-2 h-4 w-4" />
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};
