import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  icon: LucideIcon;
  className?: string;
}

export function MetricCard({ title, value, trend, icon: Icon, className }: MetricCardProps) {
  return (
    <Card className={cn(
      "bg-gradient-card border-border/50 shadow-card transition-smooth hover:shadow-soft hover:-translate-y-1",
      className
    )}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {trend && (
              <div className={cn(
                "flex items-center text-sm font-medium",
                trend.isPositive ? "text-green-600" : "text-red-600"
              )}>
                <span className={trend.isPositive ? "text-green-600" : "text-red-600"}>
                  {trend.isPositive ? "↗" : "↘"} {trend.value}
                </span>
                <span className="text-muted-foreground ml-1">vs mês anterior</span>
              </div>
            )}
          </div>
          <div className="bg-gradient-primary p-3 rounded-full shadow-soft">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}