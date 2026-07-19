"use client";

import { CreditCard, Download } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export function CurrentSubscription() {
  const [autoRenewal, setAutoRenewal] = useState(true);

  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="text-[18px] font-semibold leading-7 text-[#1C1917]">
        Current Subscription
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="min-h-[172px] rounded-lg bg-[#FAFAF9] p-4">
          <h3 className="text-[16px] font-semibold leading-6 text-[#1C1917]">
            Plan Details
          </h3>

          <dl className="mt-4 flex flex-col gap-3">
            <DetailRow
              label="Plan"
              value={
                <Badge className="rounded-full border-0 bg-[#1C1917] px-3 py-1 text-[12px] font-normal text-white hover:bg-[#1C1917]">
                  Professional
                </Badge>
              }
            />

            <DetailRow
              label="Status"
              value={
                <span className="text-[#22C55E]">
                  Active
                </span>
              }
            />

            <DetailRow
              label="Next Billing"
              value="Jan 15, 2025"
            />

            <DetailRow
              label="Amount"
              value={
                <span className="font-semibold text-[#1C1917]">
                  $29.00
                </span>
              }
            />
          </dl>
        </div>

        <div className="min-h-[172px] rounded-lg bg-[#FAFAF9] p-4">
          <h3 className="text-[16px] font-semibold leading-6 text-[#1C1917]">
            Usage
          </h3>

          <div className="mt-4 flex flex-col gap-4">
            <UsageRow
              label="Projects"
              value="8 / unlimited"
            />

            <UsageRow
              label="Storage"
              value="45GB / 100GB"
            />

            <div className="h-2 w-full overflow-hidden rounded-full bg-[#F5F5F4]">
              <div className="h-full w-[45%] rounded-full bg-[#1C1917]" />
            </div>
          </div>
        </div>

        <div className="min-h-[172px] rounded-lg bg-[#FAFAF9] p-4">
          <h3 className="text-[16px] font-semibold leading-6 text-[#1C1917]">
            Settings &amp; Actions
          </h3>

          <div className="mt-4 flex items-center justify-between gap-4">
            <label
              htmlFor="auto-renewal"
              className="text-[14px] font-normal leading-5 text-[#57534E]"
            >
              Auto-renewal
            </label>

            <Switch
              id="auto-renewal"
              checked={autoRenewal}
              onCheckedChange={setAutoRenewal}
              aria-label="Toggle subscription auto-renewal"
              className="h-6 w-11 bg-[#E7E5E4] data-[state=checked]:bg-[#1C1917]"
            />
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-10 justify-center gap-3 rounded-lg border-[#E7E5E4] bg-[#F5F5F4] text-[14px] font-normal text-[#44403C] shadow-none hover:bg-[#E7E5E4]"
            >
              <CreditCard
                className="size-4"
                strokeWidth={1.5}
              />
              Update Payment Method
            </Button>

            <Button
              type="button"
              variant="outline"
              className="h-10 justify-center gap-3 rounded-lg border-[#E7E5E4] bg-[#F5F5F4] text-[14px] font-normal text-[#44403C] shadow-none hover:bg-[#E7E5E4]"
            >
              <Download
                className="size-4"
                strokeWidth={1.5}
              />
              Download Invoice
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

type DetailRowProps = {
  label: string;
  value: React.ReactNode;
};

function DetailRow({
  label,
  value,
}: DetailRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 text-[14px] leading-5">
      <dt className="text-[#57534E]">
        {label}
      </dt>

      <dd className="text-right text-[#44403C]">
        {value}
      </dd>
    </div>
  );
}

type UsageRowProps = {
  label: string;
  value: string;
};

function UsageRow({
  label,
  value,
}: UsageRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 text-[14px] leading-5">
      <span className="text-[#57534E]">
        {label}
      </span>

      <span className="text-[#44403C]">
        {value}
      </span>
    </div>
  );
}