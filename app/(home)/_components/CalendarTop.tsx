import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusCircledIcon,
  ResetIcon,
} from "@radix-ui/react-icons";

export default function CalendarTop({
  displayMonthState: [displayMonth, setDisplayMonth],
}: {
  displayMonthState: [Date, (date: Date) => void];
}) {
  return (
    <div className="flex w-full justify-between p-5 text-3xl font-black text-tertiary">
      <button type="button">
        {/* TODO: Adding Task */}
        <PlusCircledIcon className="size-6" />
      </button>

      <div className="flex items-center justify-center gap-5">
        <button
          onClick={() =>
            setDisplayMonth(
              new Date(displayMonth.setMonth(displayMonth.getMonth() - 1)),
            )
          }
          type="button"
        >
          <ChevronLeftIcon className="size-6" />
        </button>
        {displayMonth
          .toLocaleDateString("en-GB", { month: "long" })
          .toUpperCase()}{" "}
        {displayMonth.getFullYear()}
        <button
          onClick={() =>
            setDisplayMonth(
              new Date(displayMonth.setMonth(displayMonth.getMonth() + 1)),
            )
          }
          type="button"
        >
          <ChevronRightIcon className="size-6" />
        </button>
      </div>

      <button
        onClick={() =>
          setDisplayMonth(
            new Date(new Date().getFullYear(), new Date().getMonth()),
          )
        }
        type="button"
      >
        <ResetIcon className="size-6" />
      </button>
    </div>
  );
}
