import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProdutoDetalhe() {
  const { id } = useParams();
  useEffect(() => { document.title = `Produto ${id} • Panisul`; }, [id]);

  return (
    <DashboardLayout>
      <div className="p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Produto #{id}</h1>
          <p className="text-muted-foreground">Vendas e produção</p>
        </header>

        <Tabs defaultValue="vendas">
          <TabsList>
            <TabsTrigger value="vendas">Histórico de Vendas</TabsTrigger>
            <TabsTrigger value="producao">Histórico de Produção</TabsTrigger>
          </TabsList>

          <TabsContent value="vendas" className="mt-4">
            <div className="rounded-lg border p-4 space-y-2">
              <div>
                Última venda no acerto <NavLink to="/vendas/acertos/AC001" className="text-primary underline">AC001</NavLink>
              </div>
              <div>Quantidade: 100</div>
            </div>
          </TabsContent>

          <TabsContent value="producao" className="mt-4">
            <div className="rounded-lg border p-4 space-y-2">
              <div>Lote #42</div>
              <div>Data: 2025-08-10</div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
