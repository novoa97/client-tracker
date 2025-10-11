"use server";
import { AppSidebar } from "@/components/sidebar";
import BottomNav from "@/components/bottom-nav";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { UserProvider } from "@/context/UserContext";
import { decodeJWT, verifyJWT } from "@/lib/jwt";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { GlobalHeader } from "@/components/global-header";
import { HeaderProvider } from "@/context/HeaderContext";

const navigationLinks = [
  { href: "/", label: "Map", icon: "map" },
  { href: "/clients", label: "Clients", icon: "users" },
  { href: "/settings", label: "Settings", icon: "settings" },
];

export default async function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const count = await prisma.user.count();

  if (count === 0) {
    return redirect("/signup");
  }

  // Check if user is authenticated
  const authCookie = await cookies();
  const session = authCookie.get("session");

  if (!session) {
    return redirect("/login");
  }

  const { success, payload } = await decodeJWT(session.value);

  if (!success) {
    return redirect("/logout");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: payload!.id,
    },
  });

  if (!user) {
    return redirect("/logout");
  }

  const { success: verified } = await verifyJWT(user, session.value);

  if (!verified) {
    return redirect("/logout");
  }

  return (
    <UserProvider user={user}>
      <div className="flex flex-row h-[100dvh] overflow-hidden">
        <SidebarProvider>
          <HeaderProvider>
            {/** Desktop version */}
            <div className="hidden md:flex w-full">
              <AppSidebar section={navigationLinks} />
              <SidebarInset>
                <GlobalHeader />
                <main className="flex-1 min-h-0 overflow-hidden">
                  {children}
                </main>
              </SidebarInset>
            </div>
            {/** Mobile version */}
            <div className="md:hidden w-full">
              <div className="flex flex-col w-full h-[100dvh] min-h-0 overflow-hidden">
                <main className="flex-1 min-h-0 overflow-hidden">
                  {children}
                </main>
                <div className="md:hidden">
                  <BottomNav section={navigationLinks} />
                </div>
              </div>
            </div>
          </HeaderProvider>
        </SidebarProvider>
      </div>
    </UserProvider>
  );
}
