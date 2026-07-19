type ProjectProgressProps = {
  value: number;
};

export function ProjectProgress({
  value,
}: ProjectProgressProps) {
  return (
    <div className="flex w-[242px] items-center gap-1.5">
      <span className="w-[26px] shrink-0 text-[12px] font-medium leading-4 text-[#78716C]">
        {value}%
      </span>

      <div className="relative h-[6px] w-[182px] overflow-hidden rounded-[10px] bg-[#F5F5F4]">
        <div
          className="h-full rounded-l-[10px] bg-[#1C1917]"
          style={{
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
}