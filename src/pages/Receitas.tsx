import { useEffect } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";

export default function Receitas() {
  useEffect(() => {
    document.title = "Receitas • Panisul";
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Receitas</h1>
          <p className="text-muted-foreground">Cadastro e gestão de receitas</p>
        </header>
        <section className="rounded-lg border p-6">Em breve.</section>
      </div>
    </DashboardLayout>
  );
}
