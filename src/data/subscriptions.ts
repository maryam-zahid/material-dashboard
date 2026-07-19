export type PricingFeature = {
  label: string;
  included: boolean;
};

export type PricingPlan = {
  id: string;
  name: string;
  price: number;
  description: string;
  features: PricingFeature[];
  actionLabel: string;
  popular?: boolean;
};

export type BillingRecord = {
  id: number;
  date: string;
  description: string;
  amount: string;
  status: "Paid";
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 9,
    description: "Perfect for individuals getting started",
    actionLabel: "Get Started",
    features: [
      { label: "Up to 5 projects", included: true },
      { label: "10GB storage", included: true },
      { label: "Basic support", included: true },
      { label: "Advanced analytics", included: false },
      { label: "Team collaboration", included: false },
      { label: "Priority support", included: false },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: 29,
    description: "Best for growing teams and businesses",
    actionLabel: "Upgrade Now",
    popular: true,
    features: [
      { label: "Unlimited projects", included: true },
      { label: "100GB storage", included: true },
      { label: "Priority support", included: true },
      { label: "Advanced analytics", included: true },
      { label: "Team collaboration", included: true },
      { label: "API access", included: false },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 99,
    description: "For large organizations with advanced needs",
    actionLabel: "Contact Sales",
    features: [
      { label: "Unlimited projects", included: true },
      { label: "Unlimited storage", included: true },
      { label: "24/7 premium support", included: true },
      { label: "Advanced analytics", included: true },
      { label: "Team collaboration", included: true },
      { label: "Full API access", included: true },
    ],
  },
];

export const billingHistory: BillingRecord[] = [
  {
    id: 1,
    date: "Dec 15, 2024",
    description: "Professional Plan - Monthly",
    amount: "$29.00",
    status: "Paid",
  },
  {
    id: 2,
    date: "Nov 15, 2024",
    description: "Professional Plan - Monthly",
    amount: "$29.00",
    status: "Paid",
  },
  {
    id: 3,
    date: "Oct 15, 2024",
    description: "Professional Plan - Monthly",
    amount: "$29.00",
    status: "Paid",
  },
];