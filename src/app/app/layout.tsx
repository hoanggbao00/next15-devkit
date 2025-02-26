import { AppSidebar } from "@/components/layout/app-sidebar";
import Header from "@/components/layout/header/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { type ReactNode, Suspense } from "react";

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      {/* //* Suspense for example useSearchParams header flags. You should remove this suspense and useSearchParams inside component */}
      <Suspense fallback={<div>Loading Sidebar...</div>}>
        <AppSidebar />
      </Suspense>
      <SidebarInset className="min-h-screen">
        {/* //* Suspense for example useSearchParams header flags. You should remove this suspense and useSearchParams inside component */}
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>
        <div className="min-h-[calc(100vh-4rem)] group-has-[[data-collapsible=icon]]/sidebar-wrapper:min-h-[calc(100vh-3rem)] px-4 pb-4 space-y-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default AppLayout;
