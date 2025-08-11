import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Table, TableBody as Tbody, TableCell as Td, TableHead as Th, TableHeader as Thead, TableRow as Tr } from "@/components/ui/table";

export default function Acertos() {
  useEffect(() => { document.title = "Acertos (Vendas) • Panisul"; }, []);

  const rows = [
    { id: "AC001", data: "2025-08-10", vendedor: "João", cliente: "Cliente A" },
    { id: "AC002", data: "2025-08-11", vendedor: "Maria", cliente: "Cliente B" },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Acertos (Vendas Externas)</h1>
          <p className="text-muted-foreground">Lista de acertos com acesso aos detalhes</p>
        </header>
        <section className="rounded-lg border p-0 overflow-hidden">
          <Table>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Data</Th>
                <Th>Vendedor</Th>
                <Th>Cliente</Th>
              </Tr>
            </Thead>
            <Tbody>
              {rows.map((r) => (
                <Tr key={r.id}>
                  <Td>
                    <NavLink to={`/vendas/acertos/${r.id}`} className="text-primary underline">
                      {r.id}
                    </NavLink>
                  </Td>
                  <Td>{r.data}</Td>
                  <Td>{r.vendedor}</Td>
                  <Td>
                    <NavLink to={`/clientes/1`} className="text-primary underline">
                      {r.cliente}
                    </NavLink>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </section>
      </div>
    </DashboardLayout>
  );
}
