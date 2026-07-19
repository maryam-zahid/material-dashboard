import Image from "next/image";

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
import { authors } from "@/data/tables";

export function AuthorsTable() {
  return (
    <section className="w-full overflow-hidden rounded-2xl border border-[#E7E5E4] bg-white">
      <div className="px-6 py-5">
        <h2 className="text-[18px] font-semibold leading-7 text-[#1C1917]">
          Authors Table
        </h2>
      </div>

      <div className="w-full overflow-x-auto">
        <Table className="min-w-[1088px]">
          <TableHeader>
            <TableRow className="h-10 border-0 bg-[#FAFAF9] hover:bg-[#FAFAF9]">
              <TableHead className="w-[411px] pl-6 text-[12px] font-normal leading-4 text-[#78716C]">
                AUTHOR
              </TableHead>

              <TableHead className="w-[165px] text-[12px] font-normal leading-4 text-[#78716C]">
                FUNCTION
              </TableHead>

              <TableHead className="w-[174px] text-[12px] font-normal leading-4 text-[#78716C]">
                STATUS
              </TableHead>

              <TableHead className="w-[130px] text-[12px] font-normal leading-4 text-[#78716C]">
                EMPLOYED
              </TableHead>

              <TableHead className="w-[80px] text-[12px] font-normal leading-4 text-[#78716C]">
                ACTION
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {authors.map((author) => (
              <TableRow
                key={author.id}
                className="h-14 border-[#E7E5E4] hover:bg-[#FAFAF9]/60"
              >
                <TableCell className="px-6 py-2">
                  <div className="flex items-center gap-3">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      width={40}
                      height={40}
                      className="size-10 shrink-0 rounded-full object-cover"
                    />

                    <div className="min-w-0">
                      <p className="truncate text-[14px] font-normal leading-5 text-[#171717]">
                        {author.name}
                      </p>

                      <p className="truncate text-[14px] font-normal leading-5 text-[#78716C]">
                        {author.email}
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell className="py-2">
                  <div>
                    <p className="text-[14px] font-normal leading-5 text-[#1C1917]">
                      {author.role}
                    </p>

                    <p className="text-[14px] font-normal leading-5 text-[#78716C]">
                      {author.department}
                    </p>
                  </div>
                </TableCell>

                <TableCell className="py-2">
                  <Badge
                    className={
                      author.status === "Online"
                        ? "h-6 rounded-full border-0 bg-[#F0FDF4] px-2 text-[12px] font-normal leading-4 text-[#22C55E] shadow-none hover:bg-[#F0FDF4]"
                        : "h-6 rounded-full border-0 bg-[#E7E5E4] px-2 text-[12px] font-normal leading-4 text-[#1C1917] shadow-none hover:bg-[#E7E5E4]"
                    }
                  >
                    {author.status}
                  </Badge>
                </TableCell>

                <TableCell className="py-2 text-[14px] font-normal leading-5 text-[#737373]">
                  {author.employed}
                </TableCell>

                <TableCell className="py-2">
                  <Button
                    type="button"
                    variant="secondary"
                    className="h-9 rounded-lg border border-[#E7E5E4] bg-[#F5F5F4] px-3 text-[14px] font-normal leading-5 text-[#44403C] shadow-none hover:bg-[#E7E5E4]"
                  >
                    Edit
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