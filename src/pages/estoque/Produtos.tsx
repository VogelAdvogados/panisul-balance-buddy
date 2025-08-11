import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Table, TableBody as Tbody, TableCell as Td, TableHead as Th, TableHeader as Thead, TableRow as Tr } from "@/components/ui/table";

export default function Produtos() {
  useEffect(() => { document.title = "Produtos • Panisul"; }, []);

  const rows = [
    { id: 1, nome: "Pão Francês", preco: "R$ 12,00/kg" },
    { id: 2, nome: "Cuca", preco: "R$ 20,00/kg" },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Produtos</h1>
          <p className="text-muted-foreground">Itens acabados</p>
        </header>
        <section className="rounded-lg border p-0 overflow-hidden">
          <Table>
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Preço</Th>
              </Tr>
            </Thead>
            <Tbody>
              {rows.map((r) => (
                <Tr key={r.id}>
                  <Td>
                    <NavLink to={`/estoque/produtos/${r.id}`} className="text-primary underline">
                      {r.nome}
                    </NavLink>
                  </Td>
                  <Td>{r.preco}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </section>
      </div>
    </DashboardLayout>
  );
}
