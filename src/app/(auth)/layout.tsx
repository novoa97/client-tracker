import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[100dvh] items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold flex items-center justify-center">
            <div className="flex items-center">
              <Image src="/logo.png" alt="logo" width={75} height={75} />
              ClientTracker
            </div>
          </CardTitle>
          <CardContent className="space-y-4 mt-4">{children}</CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
