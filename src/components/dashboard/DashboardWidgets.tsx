import { AnalyticsWidgetCard } from "@/components/dashboard/AnalyticsWidgetCard";
import { OrdersOverviewCard } from "@/components/dashboard/OrdersOverviewCard";
import { chartWidgets } from "@/data/widgets";

export function DashboardWidgets() {
  return (
    <section
      aria-label="Dashboard analytics"
      className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
    >
      {chartWidgets.map((widget) => (
        <AnalyticsWidgetCard
          key={widget.id}
          widget={widget}
        />
      ))}

      <OrdersOverviewCard />
    </section>
  );
}