import Day from "./Day";
import { State } from "@/types";
import CalendarTop from "./CalendarTop";

export default function CalendarView({
  selectedDayState: [selectedDay, setSelectedDay],
}: {
  selectedDayState: State<Date>;
}) {
  return (
    <div className="flex w-2/3 flex-col">
      <CalendarTop selectedDayState={[selectedDay, setSelectedDay]} />

      <div
        className="grid h-full grid-cols-7 grid-rows-5 place-items-center"
        onWheel={(e: React.WheelEvent<HTMLDivElement>) => {
          if (e.deltaY < 0)
            setSelectedDay((prev) => {
              const d = new Date(prev);
              d.setMonth(d.getMonth() - 1);
              return d;
            });
          else
            setSelectedDay((prev) => {
              const d = new Date(prev);
              d.setMonth(d.getMonth() + 1);
              return d;
            });
        }}
      >
        {Array.from({ length: 35 }, (_, i) => {
          const d = new Date(selectedDay.getFullYear(), selectedDay.getMonth());
          d.setDate(d.getDate() - d.getDay() + i + 1);

          return (
            <Day
              key={i}
              num={d.getDate()}
              today={d.toDateString() === new Date().toDateString()}
              selected={selectedDay.toDateString() === d.toDateString()}
              thisMonth={d.getMonth() === selectedDay.getMonth()}
              onClick={() => setSelectedDay(d)}
              tasks={[
                {
                  id: 123,
                  startDate: d,
                  endDate: d,
                  title: "Title",
                  description: "Desc",
                  category: "string",
                  color: "black",
                },
                {
                  id: 123,
                  startDate: d,
                  endDate: d,
                  title: "Title",
                  description: "Desc",
                  category: "string",
                  color: "lime",
                },
                {
                  id: 123,
                  startDate: d,
                  endDate: d,
                  title: "Title",
                  description: "Desc",
                  category: "string",
                  color: "red",
                },
                {
                  id: 123,
                  startDate: d,
                  endDate: d,
                  title: "Title",
                  description: "Desc",
                  category: "string",
                  color: "black",
                },
              ]}
            />
          );
        })}
      </div>
    </div>
  );
}
