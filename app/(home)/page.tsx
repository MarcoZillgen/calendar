"use client";

import BigDate from "./_components/BigDate";
import CalendarView from "./_components/CalendarView";

import { useState, useEffect } from "react";

export default function Home() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <main className="w-full h-full flex">
      <BigDate date={date} />
      <CalendarView date={date} />
    </main>
  );
}
