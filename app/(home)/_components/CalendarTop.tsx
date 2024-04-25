import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusCircledIcon,
  ResetIcon,
} from "@radix-ui/react-icons";

export default function CalendarTop({
  selectedDayState: [selectedDay, setSelectedDay],
}: {
  selectedDayState: [Date, (date: Date) => void];
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
            setSelectedDay(
              new Date(selectedDay.setMonth(selectedDay.getMonth() - 1)),
            )
          }
          type="button"
        >
          <ChevronLeftIcon className="size-6" />
        </button>
        {selectedDay.toLocaleString("default", { month: "long" })}{" "}
        {selectedDay.getFullYear()}
        <button
          onClick={() =>
            setSelectedDay(
              new Date(selectedDay.setMonth(selectedDay.getMonth() + 1)),
            )
          }
          type="button"
        >
          <ChevronRightIcon className="size-6" />
        </button>
      </div>

      <button
        onClick={() =>
          setSelectedDay(
            new Date(new Date()),
          )
        }
        type="button"
      >
        <ResetIcon className="size-6" />
      </button>
    </div>
  );
}
