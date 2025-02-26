"use client";

import { SearchProvider } from "@/components/providers/search-provider";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Search } from "./search";
import { ThemeSwitcherHeader } from "./theme-switcher-header";

export default function HeaderWithSearch() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop);
    };

    // Add scroll listener to the body
    document.addEventListener("scroll", onScroll, { passive: true });

    // Clean up the event listener on unmount
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <SearchProvider>
      <header
        className={cn(
          "flex h-16 items-center gap-2 transition-[height] group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 z-10 p-4",
          offset > 10 ? "shadow" : "shadow-none",
        )}
      >
        <SidebarTrigger variant="outline" className="scale-125 sm:scale-100" />
        <Separator orientation="vertical" className="h-6" />
        <Search />
        <div className="flex justify-end items-center flex-1">
          <ThemeSwitcherHeader />
        </div>
      </header>
    </SearchProvider>
  );
}
