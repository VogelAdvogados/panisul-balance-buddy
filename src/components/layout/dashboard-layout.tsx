import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="h-screen flex flex-col w-full bg-background">
        <header className="h-12 flex items-center border-b">
          <SidebarTrigger className="ml-2" />
        </header>
        <div className="flex flex-1 w-full">
          <AppSidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
