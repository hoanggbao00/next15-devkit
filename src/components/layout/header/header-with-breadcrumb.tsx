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

export default function HeaderWithBreadcrumb() {
  const breadcrumb = undefined;

  const currentApp = {
    name: "Building Your Application",
    link: "/",
  };

  const currentFeatures = {
    name: "Data Fetching",
    link: "/data-fetching",
  };

  return (
    <header className="flex h-16 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 z-10">
      <div className="flex items-center gap-2 px-4">
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
