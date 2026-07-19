import { BillingHistory } from "@/components/subscriptions/BillingHistory";
import { CurrentSubscription } from "@/components/subscriptions/CurrentSubscription";
import { PricingPlans } from "@/components/subscriptions/PricingPlans";
import { SubscriptionsHeader } from "@/components/subscriptions/SubscriptionsHeader";

export default function SubscriptionsPage() {
  return (
    <div className="flex w-full flex-col gap-6">
      <SubscriptionsHeader />

      <CurrentSubscription />

      <PricingPlans />

      <BillingHistory />
    </div>
  );
}