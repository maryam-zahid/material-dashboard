"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

import { ProjectAvatarStack } from "@/components/dashboard/ProjectAvatarStack";
import { ProjectProgress } from "@/components/dashboard/ProjectProgress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { projects } from "@/data/projects";

export function ProjectsTable() {
  const [selectedProjects, setSelectedProjects] = useState<number[]>([]);

  function toggleProject(projectId: number) {
    setSelectedProjects((current) =>
      current.includes(projectId)
        ? current.filter((id) => id !== projectId)
        : [...current, projectId],
    );
  }

  return (
    <section className="w-full overflow-hidden rounded-md border border-[#E5E5E5] bg-white shadow-sm">
      <div className="flex flex-col gap-4 px-5 pb-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col items-start gap-0.5">
          <h2 className="text-[18px] font-semibold leading-7 text-[#1C1917]">
            Projects
          </h2>

          <div className="flex h-5 items-center gap-2">
            <span className="size-2 rounded-full bg-[#22C55E]" />

            <p className="text-[14px] font-normal leading-5 text-[#78716C]">
              30 done this month
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            className="h-[34px] rounded-md border-[#E5E5E5] bg-white px-3 text-[14px] font-medium leading-5 text-[#171717] shadow-sm"
          >
            Filter
            <SlidersHorizontal className="size-4" />
          </Button>

          <Button
            type="button"
            className="h-[34px] rounded-lg border border-[#1C1917] bg-gradient-to-b from-[#44403C] to-[#292524] px-3 text-[14px] font-medium leading-5 text-[#FAFAF9] shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_2px_0_rgba(255,255,255,0.35)] hover:from-[#44403C] hover:to-[#292524] hover:opacity-90"
          >
            New Project
          </Button>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <Table className="min-w-[1060px]">
          <TableHeader>
            <TableRow className="h-10 border-0 hover:bg-transparent">
              <TableHead className="w-[282px] pl-6 text-[12px] font-normal leading-4 text-[#78716C]">
                COMPANIES
              </TableHead>

              <TableHead className="w-[136px] text-[12px] font-normal leading-4 text-[#78716C]">
                MEMBERS
              </TableHead>

              <TableHead className="w-[130px] text-[12px] font-normal leading-4 text-[#78716C]">
                BUDGET
              </TableHead>

              <TableHead className="w-[133px] text-[12px] font-normal leading-4 text-[#78716C]">
                TEAM
              </TableHead>

              <TableHead className="w-[248px] text-[12px] font-normal leading-4 text-[#78716C]">
                COMPLETION
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {projects.map((project) => {
              const checked = selectedProjects.includes(project.id);

              return (
                <TableRow
                  key={project.id}
                  data-state={checked ? "selected" : undefined}
                  className="h-[77px] border-[#E5E5E5] hover:bg-[#FAFAF9]/60 data-[state=selected]:bg-[#FAFAF9]"
                >
                  <TableCell className="w-[282px] px-4">
                    <div className="flex items-center gap-4">
                      <Checkbox
                        checked={checked}
                        onCheckedChange={() => toggleProject(project.id)}
                        aria-label={`Select ${project.name}`}
                        className="size-[18px] rounded border-[#E5E5E5]"
                      />

                      <Image
                        src={project.logo}
                        alt=""
                        width={20}
                        height={20}
                        className="size-5 shrink-0 object-contain"
                      />

                      <span className="whitespace-nowrap text-[14px] font-medium leading-5 text-[#1C1917]">
                        {project.name}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="w-[136px]">
                    <ProjectAvatarStack members={project.members} />
                  </TableCell>

                  <TableCell className="w-[130px] text-[14px] font-normal leading-5 text-[#78716C]">
                    {project.budget}
                  </TableCell>

                  <TableCell className="w-[133px]">
                    <Badge
                      variant="outline"
                      className="h-6 rounded border-[#E5E5E5] bg-white px-2 text-[12px] font-medium leading-4 text-[#171717]"
                    >
                      {project.team}
                    </Badge>
                  </TableCell>

                  <TableCell className="w-[248px]">
                    <ProjectProgress value={project.completion} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <div className="flex min-h-[66px] flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[14px] font-medium leading-5 text-[#171717]">
          Page 2 of 10
        </p>

        <div className="flex items-center gap-4">
          <Button
            type="button"
            variant="outline"
            className="h-[34px] w-[76px] rounded-md border-[#E5E5E5] bg-white px-3 text-[14px] font-medium leading-5 text-[#171717] shadow-sm"
          >
            <ChevronLeft className="size-4" />
            Prev
          </Button>

          <Button
            type="button"
            variant="outline"
            className="h-[34px] w-[78px] rounded-md border-[#E5E5E5] bg-white px-3 text-[14px] font-medium leading-5 text-[#171717] shadow-sm"
          >
            Next
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}