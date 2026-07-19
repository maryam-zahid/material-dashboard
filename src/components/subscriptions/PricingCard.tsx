import {
  Check,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type { PricingPlan } from "@/data/subscriptions";

type PricingCardProps = {
  plan: PricingPlan;
};

export function PricingCard({
  plan,
}: PricingCardProps) {
  return (
    <article
      className={[
        "relative flex min-h-[409px] flex-col rounded-lg bg-white p-6",
        plan.popular
          ? "border-2 border-[#1C1917]"
          : "border border-[#E7E5E4]",
      ].join(" ")}
    >
      {plan.popular && (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1C1917] px-3 py-1 text-[12px] font-normal leading-4 text-white">
          Most Popular
        </span>
      )}

      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-[18px] font-semibold leading-7 text-[#1C1917]">
          {plan.name}
        </h3>

        <div className="flex items-end justify-center">
          <span className="text-[36px] font-bold leading-10 text-[#1C1917]">
            ${plan.price}
          </span>

          <span className="mb-1 text-[14px] font-normal leading-5 text-[#78716C]">
            /month
          </span>
        </div>

        <p className="text-[14px] font-normal leading-5 text-[#57534E]">
          {plan.description}
        </p>
      </div>

      <ul className="mt-7 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li
            key={feature.label}
            className="flex items-center gap-3"
          >
            {feature.included ? (
              <Check
                className="size-4 shrink-0 text-[#22C55E]"
                strokeWidth={2.5}
              />
            ) : (
              <X
                className="size-4 shrink-0 text-[#A8A29E]"
                strokeWidth={2.5}
              />
            )}

            <span
              className={[
                "text-[14px] font-normal leading-5",
                feature.included
                  ? "text-[#1C1917]"
                  : "text-[#78716C]",
              ].join(" ")}
            >
              {feature.label}
            </span>
          </li>
        ))}
      </ul>

      <Button
        type="button"
        className={
          plan.popular
            ? "mt-7 h-[38px] w-full rounded-lg border border-[#1C1917] bg-gradient-to-b from-[#44403C] to-[#292524] text-[14px] font-normal text-[#FAFAF9] shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_2px_0_rgba(255,255,255,0.35)] hover:opacity-90"
            : "mt-7 h-9 w-full rounded-lg border border-[#E7E5E4] bg-[#F5F5F4] text-[14px] font-normal text-[#44403C] shadow-none hover:bg-[#E7E5E4]"
        }
      >
        {plan.actionLabel}
      </Button>
    </article>
  );
}