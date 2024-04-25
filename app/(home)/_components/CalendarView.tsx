import { useState } from "react";
import Day from "./Day";

export default function CalendarView({ date }: { date: Date }) {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [displayMonth, setDisplayMonth] = useState<Date>(new Date(date));

  return (
    <div
      className="grid grid-cols-6 grid-rows-6 place-items-center w-2/3"
      onScroll={(e) => {
        if (e.deltaY < 0)
          setDisplayMonth(new Date(date.setMonth(date.getMonth() - 1)));
        else if (e.deltaY > 0)
          setDisplayMonth(new Date(date.setMonth(date.getMonth() + 1)));
      }}
    >
      {Array.from({ length: 42 }).map((_, i) => {
        const d = new Date(date);
        d.setDate(d.getDate() - d.getDay() + i);
        return (
          <Day
            key={i}
            num={d.getDate()}
            today={d.toDateString() === new Date().toDateString()}
            selected={selectedDay === d.toDateString()}
            onClick={() => setSelectedDay(d.toDateString())}
          />
        );
      })}
    </div>
  );
}
