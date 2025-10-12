"use client";
import { usePathname } from "next/navigation";
import DynamicIcon from "./icon";
import Image from "next/image";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarFooter,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenu,
} from "@/components/ui/sidebar";

interface Props {
  section?: {
    href: string;
    label: string;
    icon: string;
  }[];
}

export function AppSidebar({ section }: Props) {
  const pathname = usePathname();

  const path = "/" + pathname.split("/")[1];

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Image
                    style={{
                      filter: "invert(1)",
                    }}
                    src="/logo.svg"
                    className="size-6"
                    width={100}
                    height={100}
                    alt="logo"
                  />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">ClientTracker</span>
                  <span className="font-sm text-muted-foreground">
                    v{process.env.NEXT_PUBLIC_APP_VERSION}
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            {section?.map(({ href, label, icon }) => {
              return (
                <SidebarMenuItem key={label} style={{ listStyle: "none" }}>
                  <SidebarMenuButton
                    asChild
                    className={path === href ? "bg-muted font-medium" : ""}
                  >
                    <a href={href}>
                      <DynamicIcon name={icon} className="w-4 h-4" />
                      <span>{label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
