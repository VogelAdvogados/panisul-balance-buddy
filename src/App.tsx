import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Listagens
import Compras from "./pages/Compras";
import Estoque from "./pages/Estoque";
import Receitas from "./pages/Receitas";
import Clientes from "./pages/Clientes";
import Financeiro from "./pages/Financeiro";
import Relatorios from "./pages/Relatorios";
import Configuracoes from "./pages/Configuracoes";

// Novas rotas (Fase 1)
import Acertos from "./pages/vendas/Acertos";
import AcertoDetalhe from "./pages/vendas/AcertoDetalhe";
import Pagar from "./pages/financeiro/Pagar";
import Receber from "./pages/financeiro/Receber";
import Fornecedores from "./pages/fornecedores/Index";
import FornecedorDetalhe from "./pages/fornecedores/Detalhe";
import Insumos from "./pages/estoque/Insumos";
import InsumoDetalhe from "./pages/estoque/InsumoDetalhe";
import Produtos from "./pages/estoque/Produtos";
import ProdutoDetalhe from "./pages/estoque/ProdutoDetalhe";
import ClienteDetalhe from "./pages/clientes/ClienteDetalhe";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Vendas */}
          <Route path="/vendas/acertos" element={<Acertos />} />
          <Route path="/vendas/acertos/:id" element={<AcertoDetalhe />} />

          {/* Financeiro */}
          <Route path="/financeiro/pagar" element={<Pagar />} />
          <Route path="/financeiro/receber" element={<Receber />} />

          {/* Fornecedores */}
          <Route path="/fornecedores" element={<Fornecedores />} />
          <Route path="/fornecedores/:id" element={<FornecedorDetalhe />} />

          {/* Clientes */}
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/clientes/:id" element={<ClienteDetalhe />} />

          {/* Estoque */}
          <Route path="/estoque/insumos" element={<Insumos />} />
          <Route path="/estoque/insumos/:id" element={<InsumoDetalhe />} />
          <Route path="/estoque/produtos" element={<Produtos />} />
          <Route path="/estoque/produtos/:id" element={<ProdutoDetalhe />} />

          {/* Outras existentes */}
          <Route path="/compras" element={<Compras />} />
          <Route path="/estoque" element={<Estoque />} />
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/financeiro" element={<Financeiro />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/configuracoes" element={<Configuracoes />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
