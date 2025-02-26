"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dataSidebar } from "./data-sidebar";
import CollapsibleSidebarItem from "./nav-collapsible";

export function NavMain() {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();

  const handleClick = () => {
    if (isMobile) setOpenMobile(false);
  };

  return dataSidebar.map((item) => (
    <SidebarGroup key={item.group}>
      <SidebarGroupLabel>{item.group}</SidebarGroupLabel>
      <SidebarMenu>
        {item.items.map((item) =>
          item.items ? (
            <CollapsibleSidebarItem key={item.title} sidebarItem={item} />
          ) : (
            <SidebarMenuItem key={item.title} className="w-full">
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                className={cn(
                  pathname === item.url &&
                    "bg-primary/5 font-semibold text-primary",
                )}
              >
                <Link href={item.url} onClick={handleClick} prefetch={false}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ),
        )}
      </SidebarMenu>
    </SidebarGroup>
  ));
}
