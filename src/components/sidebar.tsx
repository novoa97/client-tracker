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
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface Props {
  section?: {
    href: string;
    label: string;
    icon: string;
  }[];
}

export function AppSidebar({ section }: Props) {
  const pathname = usePathname();
  const t = useTranslations();
  const path = "/" + pathname.split("/")[1];

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <>
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-9 items-center justify-center rounded-lg shadow-sm">
                  <Image
                    src="/logo.svg"
                    className="size-5"
                    style={{
                      filter: "invert(1)",
                    }}
                    width={100}
                    height={100}
                    alt="logo"
                  />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold text-sm">ClientTracker</span>
                </div>
              </>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="pt-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground/70 font-medium px-3">
            {t("Navigation")}
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-1">
            <SidebarMenu>
              {section?.map(({ href, label, icon }) => {
                const isActive = path === href;
                return (
                  <SidebarMenuItem key={label}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "relative transition-all duration-200",
                        isActive && "bg-primary/10 text-primary font-medium"
                      )}
                    >
                      <a href={href} className="flex items-center gap-3">
                        {/* {isActive && (
                          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-primary rounded-r-full" />
                        )} */}
                        <DynamicIcon
                          name={icon}
                          className={cn(
                            "w-4 h-4 transition-colors",
                            isActive ? "text-primary" : "text-muted-foreground"
                          )}
                        />
                        <span>{t(label)}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-3 border-t border-sidebar-border">
        <div className="flex items-center justify-right">
          <span className="bg-muted px-2 py-0.5 rounded-md text-xs font-medium text-muted-foreground">
            v2.0.0
          </span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
