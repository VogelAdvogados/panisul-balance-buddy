import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  DollarSign, 
  ChefHat,
  FileText,
  Settings
} from "lucide-react";
import panisulLogo from "@/assets/panisul-logo.png";

const navigationItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    isActive: true
  },
  {
    title: "Compras",
    icon: ShoppingCart,
    href: "/compras"
  },
  {
    title: "Estoque",
    icon: Package,
    href: "/estoque"
  },
  {
    title: "Receitas",
    icon: ChefHat,
    href: "/receitas"
  },
  {
    title: "Clientes",
    icon: Users,
    href: "/clientes"
  },
  {
    title: "Financeiro",
    icon: DollarSign,
    href: "/financeiro"
  },
  {
    title: "Relatórios",
    icon: FileText,
    href: "/relatorios"
  },
  {
    title: "Configurações",
    icon: Settings,
    href: "/configuracoes"
  }
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn(
      "flex flex-col h-full bg-gradient-warm border-r border-border shadow-card",
      className
    )}>
      {/* Logo */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center space-x-3">
          <img 
            src={panisulLogo} 
            alt="Panisul" 
            className="h-10 w-10 rounded-lg shadow-soft"
          />
          <div>
            <h1 className="text-xl font-bold text-foreground">Panisul</h1>
            <p className="text-sm text-muted-foreground">Sistema de Gestão</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.href}
              variant={item.isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start transition-smooth group",
                item.isActive 
                  ? "bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-card" 
                  : "hover:bg-accent/50 text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn(
                "mr-3 h-5 w-5 transition-smooth",
                item.isActive ? "text-primary-foreground" : "group-hover:text-golden"
              )} />
              {item.title}
            </Button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border/50">
        <div className="text-xs text-muted-foreground text-center">
          © 2024 Panisul
        </div>
      </div>
    </div>
  );
}