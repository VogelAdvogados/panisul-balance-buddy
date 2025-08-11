import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Table, TableBody as Tbody, TableCell as Td, TableHead as Th, TableHeader as Thead, TableRow as Tr } from "@/components/ui/table";

export default function Insumos() {
  useEffect(() => { document.title = "Insumos • Panisul"; }, []);

  const rows = [
    { id: 1, nome: "Farinha", estoque: "120 kg" },
    { id: 2, nome: "Fermento", estoque: "30 kg" },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Insumos</h1>
          <p className="text-muted-foreground">Matéria-prima</p>
        </header>
        <section className="rounded-lg border p-0 overflow-hidden">
          <Table>
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Estoque</Th>
              </Tr>
            </Thead>
            <Tbody>
              {rows.map((r) => (
                <Tr key={r.id}>
                  <Td>
                    <NavLink to={`/estoque/insumos/${r.id}`} className="text-primary underline">
                      {r.nome}
                    </NavLink>
                  </Td>
                  <Td>{r.estoque}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </section>
      </div>
    </DashboardLayout>
  );
}
