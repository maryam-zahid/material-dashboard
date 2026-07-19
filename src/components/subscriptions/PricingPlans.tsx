import { PricingCard } from "@/components/subscriptions/PricingCard";
import { pricingPlans } from "@/data/subscriptions";

export function PricingPlans() {
  return (
    <section
      aria-label="Subscription pricing plans"
      className="grid grid-cols-1 gap-6 lg:grid-cols-3"
    >
      {pricingPlans.map((plan) => (
        <PricingCard
          key={plan.id}
          plan={plan}
        />
      ))}
    </section>
  );
}