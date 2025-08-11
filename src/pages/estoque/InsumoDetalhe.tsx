import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody as Tbody, TableCell as Td, TableHead as Th, TableHeader as Thead, TableRow as Tr } from "@/components/ui/table";

export default function InsumoDetalhe() {
  const { id } = useParams();
  useEffect(() => { document.title = `Insumo ${id} • Panisul`; }, [id]);

  return (
    <DashboardLayout>
      <div className="p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Insumo #{id}</h1>
          <p className="text-muted-foreground">Dados e histórico de movimentação</p>
        </header>

        <Tabs defaultValue="dados">
          <TabsList>
            <TabsTrigger value="dados">Dados</TabsTrigger>
            <TabsTrigger value="mov">Histórico de Movimentação</TabsTrigger>
          </TabsList>

          <TabsContent value="dados" className="mt-4">
            <div className="rounded-lg border p-4 space-y-2">
              <div>Nome: Farinha</div>
              <div>Unidade: kg</div>
              <div>Estoque atual: 120 kg</div>
            </div>
          </TabsContent>

          <TabsContent value="mov" className="mt-4">
            <div className="rounded-lg border p-0 overflow-hidden">
              <Table>
                <Thead>
                  <Tr>
                    <Th>Tipo</Th>
                    <Th>Origem/Destino</Th>
                    <Th>Quantidade</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Entrada (Compra)</Td>
                    <Td>
                      <NavLink to="/fornecedores/1" className="text-primary underline">Fornecedor X</NavLink>
                    </Td>
                    <Td>+50 kg</Td>
                  </Tr>
                  <Tr>
                    <Td>Saída (Produção)</Td>
                    <Td>
                      <NavLink to="#" className="text-primary underline">Lote de Produção #42</NavLink>
                    </Td>
                    <Td>-20 kg</Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
