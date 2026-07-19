type MiniBarChartProps = {
  bars: number[];
  activeBar: number;
  tooltip?: {
    day: string;
    label: string;
    value: number;
  };
};

const days = ["M", "T", "W", "T", "F", "S", "S"];

export function MiniBarChart({
  bars,
  activeBar,
  tooltip,
}: MiniBarChartProps) {
  return (
    <div className="relative h-[143px] w-full max-w-[210px]">
      <div className="absolute inset-x-0 top-[7px] border-t border-dashed border-[#E5E5E5]" />
      <div className="absolute inset-x-0 top-[29px] border-t border-dashed border-[#E5E5E5]" />
      <div className="absolute inset-x-0 top-[50px] border-t border-dashed border-[#E5E5E5]" />
      <div className="absolute inset-x-0 top-[72px] border-t border-dashed border-[#E5E5E5]" />
      <div className="absolute inset-x-0 top-[93px] border-t border-dashed border-[#E5E5E5]" />
      <div className="absolute inset-x-0 top-[111px] border-t border-[#E5E5E5]" />

      <div className="absolute inset-x-0 bottom-[32px] flex h-[75px] items-end justify-between px-[3px]">
        {bars.map((height, index) => (
          <div
            key={`${days[index]}-${index}`}
            className="relative flex h-full w-[21px] items-end justify-center"
          >
            {tooltip && index === 0 ? (
              <div className="absolute bottom-[38px] left-[4px] z-10 w-[76px] rounded border border-[#E5E5E5] bg-white p-2 text-[10px] leading-3 text-[#737373] shadow-sm">
                <p>{tooltip.day}</p>

                <div className="my-1 h-px w-full bg-[#E5E5E5]" />

                <div className="flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-[#1C1917]" />
                  <span>
                    {tooltip.label}: {tooltip.value}
                  </span>
                </div>
              </div>
            ) : null}

            <div
              className={
                index === activeBar
                  ? "w-full rounded-t-sm bg-[#3B82F6]"
                  : "w-full rounded-t-sm bg-[#1C1917]"
              }
              style={{
                height: `${height}px`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 flex justify-between px-[7px] text-[12px] leading-4 text-[#737373]">
        {days.map((day, index) => (
          <span key={`${day}-${index}`}>{day}</span>
        ))}
      </div>
    </div>
  );
}