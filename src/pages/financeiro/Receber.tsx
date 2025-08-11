import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Table, TableBody as Tbody, TableCell as Td, TableHead as Th, TableHeader as Thead, TableRow as Tr } from "@/components/ui/table";

export default function Receber() {
  useEffect(() => { document.title = "Contas a Receber • Panisul"; }, []);

  const rows = [
    { id: "AC-001", venc: "2025-08-16", desc: "Acerto 001", cliente: { id: 1, nome: "Cliente A" }, valor: "R$ 1.250,00", status: "Aberto" },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Contas a Receber</h1>
          <p className="text-muted-foreground">Integração com Clientes e Acertos</p>
        </header>
        <section className="rounded-lg border p-0 overflow-hidden">
          <Table>
            <Thead>
              <Tr>
                <Th>Vencimento</Th>
                <Th>Descrição</Th>
                <Th>Cliente</Th>
                <Th>Valor</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {rows.map((r) => (
                <Tr key={r.id}>
                  <Td>{r.venc}</Td>
                  <Td>
                    <NavLink to={`/vendas/acertos/${r.id}`} className="text-primary underline">{r.desc}</NavLink>
                  </Td>
                  <Td>
                    <NavLink to={`/clientes/${r.cliente.id}`} className="text-primary underline">
                      {r.cliente.nome}
                    </NavLink>
                  </Td>
                  <Td>{r.valor}</Td>
                  <Td>{r.status}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </section>
      </div>
    </DashboardLayout>
  );
}
