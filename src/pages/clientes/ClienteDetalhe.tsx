import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody as Tbody, TableCell as Td, TableHead as Th, TableHeader as Thead, TableRow as Tr } from "@/components/ui/table";

export default function ClienteDetalhe() {
  const { id } = useParams();
  useEffect(() => { document.title = `Cliente ${id} • Panisul`; }, [id]);

  return (
    <DashboardLayout>
      <div className="p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Cliente #{id}</h1>
          <p className="text-muted-foreground">Visão 360°</p>
        </header>

        <Tabs defaultValue="dados">
          <TabsList>
            <TabsTrigger value="dados">Dados</TabsTrigger>
            <TabsTrigger value="vendas">Histórico de Vendas</TabsTrigger>
            <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
          </TabsList>

        <TabsContent value="dados" className="mt-4">
          <div className="rounded-lg border p-4 space-y-2">
            <div>Nome: Cliente A</div>
            <div>Contato: (51) 90000-0000</div>
          </div>
        </TabsContent>

        <TabsContent value="vendas" className="mt-4">
          <div className="rounded-lg border p-0 overflow-hidden">
            <Table>
              <Thead>
                <Tr>
                  <Th>Data</Th>
                  <Th>Acerto</Th>
                  <Th>Total</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>2025-08-11</Td>
                  <Td><NavLink to="/vendas/acertos/AC001" className="text-primary underline">AC001</NavLink></Td>
                  <Td>R$ 1.250,00</Td>
                </Tr>
              </Tbody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="financeiro" className="mt-4">
          <div className="rounded-lg border p-4">
            Ver em <NavLink to="/financeiro/receber" className="text-primary underline">Contas a Receber</NavLink>
          </div>
        </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
