import { Sidebar } from "@/components/navigation/sidebar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar className="w-64 shrink-0" />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}