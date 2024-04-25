"use client";

import Menu from "./_components/Menu";
import CalendarView from "./_components/CalendarView";

import { useState, useEffect } from "react";
import { Task } from "@/types";

export default function Home() {
  const selectedDayState = useState<Date>(new Date());
  const tasksState = useState<Task[]>([]);

  return (
    <main className="flex h-full w-full">
      <Menu selectedDayState={selectedDayState} tasksState={tasksState} />
      <CalendarView selectedDayState={selectedDayState} />
    </main>
  );
}
