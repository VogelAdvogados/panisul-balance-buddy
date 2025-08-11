import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody as Tbody, TableCell as Td, TableHead as Th, TableHeader as Thead, TableRow as Tr } from "@/components/ui/table";

export default function FornecedorDetalhe() {
  const { id } = useParams();
  useEffect(() => { document.title = `Fornecedor ${id} • Panisul`; }, [id]);

  return (
    <DashboardLayout>
      <div className="p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Fornecedor #{id}</h1>
          <p className="text-muted-foreground">Visão 360°</p>
        </header>

        <Tabs defaultValue="dados">
          <TabsList>
            <TabsTrigger value="dados">Dados</TabsTrigger>
            <TabsTrigger value="compras">Histórico de Compras</TabsTrigger>
            <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
          </TabsList>

          <TabsContent value="dados" className="mt-4">
            <div className="rounded-lg border p-4 space-y-2">
              <div>Nome: Fornecedor X</div>
              <div>CNPJ: 12.345.678/0001-90</div>
              <div>Contato: (11) 99999-0000 • email@exemplo.com</div>
            </div>
          </TabsContent>

          <TabsContent value="compras" className="mt-4">
            <div className="rounded-lg border p-0 overflow-hidden">
              <Table>
                <Thead>
                  <Tr>
                    <Th>Data</Th>
                    <Th>NF</Th>
                    <Th>Valor</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>2025-08-01</Td>
                    <Td><NavLink to="#" className="text-primary underline">NF #12345</NavLink></Td>
                    <Td>R$ 2.500,00</Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="financeiro" className="mt-4">
            <div className="rounded-lg border p-4">
              Ver extrato em <NavLink to="/financeiro/pagar" className="text-primary underline">Contas a Pagar</NavLink>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
