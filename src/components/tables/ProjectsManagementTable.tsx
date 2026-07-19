import { Pencil } from "lucide-react";

import { TableProjectIcon } from "@/components/tables/TableProjectIcon";
import { TableProjectProgress } from "@/components/tables/TableProjectProgress";
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
import { tableProjects } from "@/data/tables";

export function ProjectsManagementTable() {
  return (
    <section className="w-full overflow-hidden rounded-2xl border border-[#E7E5E4] bg-white">
      <div className="px-6 py-5">
        <h2 className="text-[18px] font-semibold leading-7 text-[#1C1917]">
          Projects Table
        </h2>
      </div>

      <div className="w-full overflow-x-auto">
        <Table className="min-w-[1088px]">
          <TableHeader>
            <TableRow className="h-10 border-0 bg-[#FAFAF9] hover:bg-[#FAFAF9]">
              <TableHead className="w-[371px] pl-6 text-[12px] font-normal leading-4 text-[#78716C]">
                PROJECT
              </TableHead>

              <TableHead className="w-[164px] text-[12px] font-normal leading-4 text-[#78716C]">
                BUDGET
              </TableHead>

              <TableHead className="w-[112px] text-[12px] font-normal leading-4 text-[#78716C]">
                STATUS
              </TableHead>

              <TableHead className="w-[242px] text-[12px] font-normal leading-4 text-[#78716C]">
                COMPLETION
              </TableHead>

              <TableHead className="w-[70px] text-[12px] font-normal leading-4 text-[#78716C]">
                ACTION
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {tableProjects.map((project) => (
              <TableRow
                key={project.id}
                className="h-14 border-[#E7E5E4] hover:bg-[#FAFAF9]/60"
              >
                <TableCell className="px-6 py-2">
                  <div className="flex items-center gap-3">
                    <TableProjectIcon
                      icon={project.icon}
                      background={project.iconBackground}
                    />

                    <p className="text-[14px] font-normal leading-5 text-[#171717]">
                      {project.name}
                    </p>
                  </div>
                </TableCell>

                <TableCell className="py-2 text-[14px] font-normal leading-5 text-[#1C1917]">
                  {project.budget}
                </TableCell>

                <TableCell className="py-2">
                  <Badge
                    className={
                      project.status === "Done"
                        ? "h-6 rounded-full border-0 bg-[#F0FDF4] px-2 text-[12px] font-normal leading-4 text-[#22C55E] shadow-none hover:bg-[#F0FDF4]"
                        : "h-6 rounded-full border-0 bg-[#EFF6FF] px-2 text-[12px] font-normal leading-4 text-[#3B82F6] shadow-none hover:bg-[#EFF6FF]"
                    }
                  >
                    {project.status}
                  </Badge>
                </TableCell>

                <TableCell className="py-2">
                  <TableProjectProgress value={project.completion} />
                </TableCell>

                <TableCell className="py-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label={`Edit ${project.name}`}
                    className="size-8 rounded-md border-[#E7E5E4] bg-white shadow-none hover:bg-[#F5F5F4]"
                  >
                    <Pencil
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