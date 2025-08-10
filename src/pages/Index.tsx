import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { MetricCard } from "@/components/ui/metric-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  DollarSign, 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp,
  AlertTriangle
} from "lucide-react";

const Index = () => {
  const metrics = [
    {
      title: "Vendas do Mês",
      value: "R$ 12.450",
      trend: { value: "+12%", isPositive: true },
      icon: DollarSign
    },
    {
      title: "Produtos em Estoque",
      value: "235",
      trend: { value: "-3%", isPositive: false },
      icon: Package
    },
    {
      title: "Pedidos Hoje",
      value: "18",
      trend: { value: "+25%", isPositive: true },
      icon: ShoppingCart
    },
    {
      title: "Clientes Ativos",
      value: "142",
      trend: { value: "+8%", isPositive: true },
      icon: Users
    }
  ];

  const lowStockItems = [
    { name: "Farinha de Trigo", quantity: "5 kg", critical: true },
    { name: "Açúcar Cristal", quantity: "12 kg", critical: false },
    { name: "Ovos", quantity: "8 dúzias", critical: true },
    { name: "Fermento Biológico", quantity: "3 pacotes", critical: true }
  ];

  const topProducts = [
    { name: "Pão Francês", sales: "R$ 2.450" },
    { name: "Croissant", sales: "R$ 1.890" },
    { name: "Bolo de Chocolate", sales: "R$ 1.650" },
    { name: "Pão de Açúcar", sales: "R$ 1.420" },
    { name: "Sonho", sales: "R$ 1.280" }
  ];

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="bg-gradient-warm border-b border-border/50 -m-8 p-8 mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral das operações da Panisul</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Low Stock Alert */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Estoque Baixo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {lowStockItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.quantity} restante</p>
                  </div>
                  {item.critical && (
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="h-5 w-5 text-green-500" />
                Top Produtos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium text-sm">{product.name}</p>
                    <p className="text-xs text-muted-foreground">#{index + 1} em vendas</p>
                  </div>
                  <div className="font-bold text-golden">{product.sales}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <button className="w-full p-3 text-left rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:shadow-card transition-smooth hover:scale-[1.02]">
                Nova Venda
              </button>
              <button className="w-full p-3 text-left rounded-lg bg-muted/50 hover:bg-accent text-foreground font-medium transition-smooth hover:scale-[1.02]">
                Registrar Compra
              </button>
              <button className="w-full p-3 text-left rounded-lg bg-muted/50 hover:bg-accent text-foreground font-medium transition-smooth hover:scale-[1.02]">
                Nova Receita
              </button>
              <button className="w-full p-3 text-left rounded-lg bg-muted/50 hover:bg-accent text-foreground font-medium transition-smooth hover:scale-[1.02]">
                Cadastrar Cliente
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
