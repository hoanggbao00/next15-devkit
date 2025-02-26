import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import type { DataSidebar } from "@/types/app-sidebar";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CollapsibleSidebarItem({
  sidebarItem,
}: { sidebarItem: DataSidebar["items"][number] }) {
  const pathname = usePathname();
  const isActive = sidebarItem.url ? pathname.includes(sidebarItem.url) : false;
  const { isMobile, setOpenMobile, state } = useSidebar();

  const handleClick = () => {
    if (isMobile) setOpenMobile(false);
  };

  return state !== "collapsed" ? (
    <Collapsible
      key={sidebarItem.title}
      asChild
      defaultOpen={isActive}
      className="group/collapsible w-full"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={sidebarItem.title}>
            {sidebarItem.icon && <sidebarItem.icon />}
            <span>{sidebarItem.title}</span>
            <ChevronDown className="ml-auto size-4 transition-transform duration-200 group/collapsible-data-[state=open]:rotate-180" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {sidebarItem.items?.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton
                  asChild
                  className={cn(pathname === subItem.url && "bg-primary/10")}
                >
                  <Link
                    href={subItem.url}
                    onClick={handleClick}
                    prefetch={false}
                  >
                    {subItem.icon && <subItem.icon />}
                    <span>{subItem.title}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  ) : (
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton tooltip={sidebarItem.title}>
            {sidebarItem.icon && <sidebarItem.icon />}
            <span>{sidebarItem.title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="start" sideOffset={10}>
          <DropdownMenuLabel>{sidebarItem.title}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {sidebarItem.items?.map((sub) => (
            <DropdownMenuItem key={`${sub.title}-${sub.url}`} asChild>
              <Link
                href={sub.url}
                className={pathname === sub.url ? "bg-secondary" : ""}
              >
                <span className="max-w-52 text-wrap">{sub.title}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
}

export default CollapsibleSidebarItem;
