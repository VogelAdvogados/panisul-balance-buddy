import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Table, TableBody as Tbody, TableCell as Td, TableHead as Th, TableHeader as Thead, TableRow as Tr } from "@/components/ui/table";

export default function Fornecedores() {
  useEffect(() => { document.title = "Fornecedores • Panisul"; }, []);

  const rows = [
    { id: 1, nome: "Fornecedor X", cnpj: "12.345.678/0001-90" },
    { id: 2, nome: "Fornecedor Y", cnpj: "98.765.432/0001-10" },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Fornecedores</h1>
          <p className="text-muted-foreground">Lista de fornecedores</p>
        </header>
        <section className="rounded-lg border p-0 overflow-hidden">
          <Table>
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>CNPJ</Th>
              </Tr>
            </Thead>
            <Tbody>
              {rows.map((r) => (
                <Tr key={r.id}>
                  <Td>
                    <NavLink to={`/fornecedores/${r.id}`} className="text-primary underline">
                      {r.nome}
                    </NavLink>
                  </Td>
                  <Td>{r.cnpj}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </section>
      </div>
    </DashboardLayout>
  );
}
