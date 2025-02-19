import { AppSidebar } from "@/components/layout/app-sidebar";
import Header from "@/components/layout/header/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {} from "lucide-react";
import type { ReactNode } from "react";

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-h-screen">
        <Header />
        <div className="min-h-[calc(100vh-4rem)] group-has-[[data-collapsible=icon]]/sidebar-wrapper:min-h-[calc(100vh-3rem)] px-4 pb-4 space-y-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default AppLayout;
