import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AcertoDetalhe() {
  const { id } = useParams();
  useEffect(() => { document.title = `Acerto ${id} • Panisul`; }, [id]);

  return (
    <DashboardLayout>
      <div className="p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Acerto {id}</h1>
          <p className="text-muted-foreground">Resumo e integrações</p>
        </header>
        <Tabs defaultValue="dados" className="w-full">
          <TabsList>
            <TabsTrigger value="dados">Dados</TabsTrigger>
            <TabsTrigger value="itens">Itens</TabsTrigger>
          </TabsList>

          <TabsContent value="dados" className="mt-4">
            <div className="rounded-lg border p-4 space-y-2">
              <div>
                Cliente: <NavLink to="/clientes/1" className="text-primary underline">Cliente A</NavLink>
              </div>
              <div>Data: 2025-08-11</div>
              <div>Total: R$ 1.250,00</div>
            </div>
          </TabsContent>

          <TabsContent value="itens" className="mt-4">
            <div className="rounded-lg border p-4 space-y-2">
              <div>
                Produto: <NavLink to="/estoque/produtos/1" className="text-primary underline">Pão Francês</NavLink>
              </div>
              <div>Quantidade: 100</div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
