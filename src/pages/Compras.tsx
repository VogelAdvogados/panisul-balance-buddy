import { useEffect } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";

export default function Compras() {
  useEffect(() => {
    document.title = "Compras • Panisul";
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Compras</h1>
          <p className="text-muted-foreground">Gestão de compras</p>
        </header>
        <section className="rounded-lg border p-6">Em breve.</section>
      </div>
    </DashboardLayout>
  );
}
