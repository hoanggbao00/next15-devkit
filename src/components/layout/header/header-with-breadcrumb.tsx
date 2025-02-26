"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function HeaderWithBreadcrumb() {
  const breadcrumb = undefined;
  const [offset, setOffset] = useState(0);

  const currentApp = {
    name: "Building Your Application",
    link: "/",
  };

  const currentFeatures = {
    name: "Data Fetching",
    link: "/data-fetching",
  };

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
    <header
      className={cn(
        "flex h-16 items-center gap-2 transition-[height] sticky top-0 z-10 p-4 bg-background rounded-md group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12",
        offset > 10 ? "shadow" : "shadow-none",
      )}
    >
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="cursor-pointer" href="/">
                {currentApp.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {breadcrumb ? (
                <BreadcrumbLink className="cursor-pointer">
                  {currentFeatures.name}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{currentFeatures.name}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {breadcrumb && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="capitalize">
                    {breadcrumb}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
