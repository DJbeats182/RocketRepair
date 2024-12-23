"use client";

import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { addDays, isBefore, startOfToday } from "date-fns";

interface CalendarProps {
  selectedDate: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}

export default function Calendar({ selectedDate, onSelect }: CalendarProps) {
  const today = startOfToday();
  const maxDate = addDays(today, 30); // Allow booking up to 30 days in advance

  return (
    <div className="p-4">
      <CalendarComponent
        mode="single"
        selected={selectedDate}
        onSelect={onSelect}
        disabled={(date) => isBefore(date, today) || date.getDay() === 0} // Disable past dates and Sundays
        initialFocus
        className="rounded-md border"
      />
    </div>
  );
}