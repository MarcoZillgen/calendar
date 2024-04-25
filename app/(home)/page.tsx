"use client";

import Menu from "./_components/Menu";
import CalendarView from "./_components/CalendarView";

import { useState, useEffect } from "react";
import { Task } from "@/types";

export default function Home() {
  const [date, setDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [displayMonth, setDisplayMonth] = useState<Date>(new Date(date));
  const tasksState = useState<Task[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <main className="flex h-full w-full">
      <Menu date={date} tasksState={tasksState} />
      <CalendarView
        date={date}
        selectedDayState={[selectedDay, setSelectedDay]}
        displayMonthState={[displayMonth, setDisplayMonth]}
      />
    </main>
  );
}
