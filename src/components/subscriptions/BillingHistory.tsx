import { Download } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { billingHistory } from "@/data/subscriptions";

export function BillingHistory() {
  return (
    <section className="w-full overflow-hidden rounded-2xl border border-[#E7E5E4] bg-white">
      <div className="px-6 py-5">
        <h2 className="text-[18px] font-semibold leading-7 text-[#1C1917]">
          Billing History
        </h2>
      </div>

      <div className="w-full overflow-x-auto">
        <Table className="min-w-[900px]">
          <TableHeader>
            <TableRow className="h-10 border-0 bg-[#FAFAF9] hover:bg-[#FAFAF9]">
              <TableHead className="w-[212px] pl-6 text-[12px] font-normal text-[#78716C]">
                DATE
              </TableHead>

              <TableHead className="w-[311px] text-[12px] font-normal text-[#78716C]">
                DESCRIPTION
              </TableHead>

              <TableHead className="w-[165px] text-[12px] font-normal text-[#78716C]">
                AMOUNT
              </TableHead>

              <TableHead className="w-[199px] text-[12px] font-normal text-[#78716C]">
                STATUS
              </TableHead>

              <TableHead className="w-[70px] text-[12px] font-normal text-[#78716C]">
                ACTION
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {billingHistory.map((record) => (
              <TableRow
                key={record.id}
                className="h-14 border-[#E7E5E4] hover:bg-[#FAFAF9]/60"
              >
                <TableCell className="pl-6 text-[14px] font-normal text-[#171717]">
                  {record.date}
                </TableCell>

                <TableCell className="text-[14px] font-normal text-[#1C1917]">
                  {record.description}
                </TableCell>

                <TableCell className="text-[14px] font-normal text-[#1C1917]">
                  {record.amount}
                </TableCell>

                <TableCell>
                  <Badge className="h-6 rounded-full border-0 bg-[#F0FDF4] px-2 text-[12px] font-normal text-[#22C55E] shadow-none hover:bg-[#F0FDF4]">
                    {record.status}
                  </Badge>
                </TableCell>

                <TableCell>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label={`Download invoice for ${record.date}`}
                    className="size-8 rounded-md border-[#E7E5E4] bg-white shadow-none hover:bg-[#F5F5F4]"
                  >
                    <Download
                      className="size-4 text-[#171717]"
                      strokeWidth={1.5}
                    />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}