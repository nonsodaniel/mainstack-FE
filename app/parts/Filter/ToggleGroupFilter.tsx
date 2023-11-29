import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ToggleGroupFilter() {
  return (
    <ToggleGroup type="multiple" className="grid grid-cols-3 mt-8 ">
      <ToggleGroupItem
        value="today"
        className="whitespace-nowrap rounded-3xl text-[13px] text-black border-[1px]"
      >
        Today
      </ToggleGroupItem>
      <ToggleGroupItem
        value="7days"
        className="whitespace-nowrap rounded-3xl text-[13px] text-black border-[1px]"
      >
        Last 7 Days
      </ToggleGroupItem>
      <ToggleGroupItem
        value="month"
        className="whitespace-nowrap rounded-3xl text-[13px] text-black border-[1px]"
      >
        This Month
      </ToggleGroupItem>
      <ToggleGroupItem
        value="3months"
        className="whitespace-nowrap rounded-3xl text-[13px] text-black border-solid border-[1px]"
      >
        Last 3 Months
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
