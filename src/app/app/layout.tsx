import { AppSidebar } from "@/components/layout/app-sidebar";
import Header from "@/components/layout/header/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { type ReactNode, Suspense } from "react";

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      {/* //* Suspense for example useSearchParams header flags. You should remove this suspense and useSearchParams inside component */}
      <Suspense fallback={<div>Loading Sidebar...</div>}>
        <AppSidebar />
      </Suspense>
      <div
        id="content"
        className={cn(
          "ml-auto w-full max-w-full",
          "peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]",
          "peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]",
          "transition-[width] duration-200 ease-linear",
          "flex h-svh flex-col",
        )}
      >
        {/* //* Suspense for example useSearchParams header flags. You should remove this suspense and useSearchParams inside component */}
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>
        <main className="p-4 pb-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}

export default AppLayout;
