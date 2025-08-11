import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Table, TableBody as Tbody, TableCell as Td, TableHead as Th, TableHeader as Thead, TableRow as Tr } from "@/components/ui/table";

export default function Pagar() {
  useEffect(() => { document.title = "Contas a Pagar • Panisul"; }, []);

  const rows = [
    { id: "NF-123", venc: "2025-08-15", desc: "NF #12345", fornecedor: { id: 1, nome: "Fornecedor X" }, cat: "Insumos", valor: "R$ 2.500,00", status: "Aberto" },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Contas a Pagar</h1>
          <p className="text-muted-foreground">Integração com Fornecedores e NF</p>
        </header>
        <section className="rounded-lg border p-0 overflow-hidden">
          <Table>
            <Thead>
              <Tr>
                <Th>Vencimento</Th>
                <Th>Descrição</Th>
                <Th>Fornecedor</Th>
                <Th>Categoria</Th>
                <Th>Valor</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {rows.map((r) => (
                <Tr key={r.id}>
                  <Td>{r.venc}</Td>
                  <Td>
                    <NavLink to="#" className="text-primary underline">{r.desc}</NavLink>
                  </Td>
                  <Td>
                    <NavLink to={`/fornecedores/${r.fornecedor.id}`} className="text-primary underline">
                      {r.fornecedor.nome}
                    </NavLink>
                  </Td>
                  <Td>{r.cat}</Td>
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
