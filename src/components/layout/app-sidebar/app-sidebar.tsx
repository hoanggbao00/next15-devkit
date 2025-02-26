"use client";

import { NavMain } from "@/components/layout/app-sidebar/nav-main";
import { NavUser } from "@/components/layout/app-sidebar/nav-user";
import { TeamSwitcher } from "@/components/layout/app-sidebar/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { useIsBreakpoint } from "@/hooks/use-breakpoint";
import { useSearchParams } from "next/navigation";
import { type ComponentProps, useEffect } from "react";
import ThemeSwitcherSidebar from "./theme-switcher-sidebar";

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const isLaptop = useIsBreakpoint(1024);
  const { open, setOpen } = useSidebar();
  const searchParams = useSearchParams();

  const flags = searchParams.get("flags");

  // Auto collapse sidebar if screen is laptop size
  useEffect(() => {
    if (isLaptop && open) {
      setOpen(false);
    }
  }, [isLaptop]);

  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        {flags !== "header2" && <ThemeSwitcherSidebar />}
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
