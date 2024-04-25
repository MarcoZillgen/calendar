import Day from "./Day";
import { State } from "@/types";
import CalendarTop from "./CalendarTop";

export default function CalendarView({
  date,
  selectedDayState: [selectedDay, setSelectedDay],
  displayMonthState: [displayMonth, setDisplayMonth],
}: {
  date: Date;
  selectedDayState: State<string | null>;
  displayMonthState: State<Date>;
}) {
  return (
    <div className="flex w-2/3 flex-col">
      <CalendarTop displayMonthState={[displayMonth, setDisplayMonth]} />

      <div
        className="grid h-full grid-cols-7 grid-rows-5 place-items-center"
        onScroll={(e: React.WheelEvent<HTMLDivElement>) => {
          if (e.deltaY < 0)
            setDisplayMonth(new Date(date.setMonth(date.getMonth() - 1)));
          else if (e.deltaY > 0)
            setDisplayMonth(new Date(date.setMonth(date.getMonth() + 1)));
        }}
      >
        {Array.from({ length: 35 }, (_, i) => {
          const d = new Date(
            displayMonth.getFullYear(),
            displayMonth.getMonth(),
          );
          d.setDate(d.getDate() - d.getDay() + i + 1);

          return (
            <Day
              key={i}
              num={d.getDate()}
              today={d.toDateString() === new Date().toDateString()}
              selected={selectedDay === d.toDateString()}
              thisMonth={d.getMonth() === displayMonth.getMonth()}
              onClick={() => {
                setSelectedDay(d.toDateString());
                setDisplayMonth(d);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
