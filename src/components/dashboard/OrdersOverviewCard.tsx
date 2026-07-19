import { Bell, ShoppingCart } from "lucide-react";

import { Card } from "@/components/ui/card";

export function OrdersOverviewCard() {
  return (
    <Card className="h-[257px] w-full gap-4 rounded-lg border-[#E7E5E4] bg-white p-6 shadow-none xl:w-[258px]">
      <div className="flex h-10 flex-col items-start gap-1">
        <h2 className="text-[14px] font-semibold leading-5 text-[#1C1917]">
          Orders Overview
        </h2>

        <p className="text-[12px] font-normal leading-4 text-[#78716C]">
          Last Campaign Performance
        </p>
      </div>

      <div className="flex h-10 w-full items-start gap-3">
        <Bell
          className="mt-0.5 size-4 shrink-0 text-[#22C55E]"
          strokeWidth={1.5}
        />

        <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
          <p className="whitespace-nowrap text-[14px] font-normal leading-5 text-[#1C1917]">
            $2.400, Design Changes
          </p>

          <p className="text-[12px] font-normal leading-4 text-[#78716C]">
            22 DEC 7:20 PM
          </p>
        </div>
      </div>

      <div className="flex h-10 w-full items-start gap-3">
        <ShoppingCart
          className="mt-0.5 size-4 shrink-0 text-[#EF4444]"
          strokeWidth={1.5}
        />

        <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
          <p className="whitespace-nowrap text-[14px] font-normal leading-5 text-[#1C1917]">
            New Order #1832412
          </p>

          <p className="text-[12px] font-normal leading-4 text-[#78716C]">
            22 DEC 7:20 PM
          </p>
        </div>
      </div>

      <div className="flex h-6 w-[109px] items-center justify-center rounded-full bg-[#F0FDF4]">
        <span className="text-[12px] font-normal leading-4 text-[#22C55E]">
          +24% this month
        </span>
      </div>
    </Card>
  );
}