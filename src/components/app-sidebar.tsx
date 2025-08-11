import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Receipt,
  Package,
  Boxes,
  Users,
  Landmark,
  Truck,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const isActivePath = (current: string, path: string) =>
  current === path || current.startsWith(path + "/");

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const { pathname } = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Dashboard */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActivePath(pathname, "/")}> 
                  <NavLink to="/" end>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    {!isCollapsed && <span>Dashboard</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Vendas */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActivePath(pathname, "/vendas/acertos")}>
                  <NavLink to="/vendas/acertos">
                    <Receipt className="mr-2 h-4 w-4" />
                    {!isCollapsed && <span>Acertos (Vendas)</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Estoque */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActivePath(pathname, "/estoque/insumos")}>
                  <NavLink to="/estoque/insumos">
                    <Package className="mr-2 h-4 w-4" />
                    {!isCollapsed && <span>Insumos</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActivePath(pathname, "/estoque/produtos")}>
                  <NavLink to="/estoque/produtos">
                    <Boxes className="mr-2 h-4 w-4" />
                    {!isCollapsed && <span>Produtos</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Financeiro */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActivePath(pathname, "/financeiro/pagar")}>
                  <NavLink to="/financeiro/pagar">
                    <Landmark className="mr-2 h-4 w-4" />
                    {!isCollapsed && <span>Contas a Pagar</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActivePath(pathname, "/financeiro/receber")}>
                  <NavLink to="/financeiro/receber">
                    <Landmark className="mr-2 h-4 w-4" />
                    {!isCollapsed && <span>Contas a Receber</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Cadastros */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActivePath(pathname, "/fornecedores")}>
                  <NavLink to="/fornecedores">
                    <Truck className="mr-2 h-4 w-4" />
                    {!isCollapsed && <span>Fornecedores</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActivePath(pathname, "/clientes")}>
                  <NavLink to="/clientes">
                    <Users className="mr-2 h-4 w-4" />
                    {!isCollapsed && <span>Clientes</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
