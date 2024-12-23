"use client";

import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Clock } from "lucide-react";

interface TimeSlotsProps {
  selectedTime: string | null;
  onSelect: (time: string) => void;
}

export default function TimeSlots({ selectedTime, onSelect }: TimeSlotsProps) {
  // Generate time slots from 8 AM to 5 PM in 2-hour increments
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 8;
    const endHour = 17;
    
    for (let hour = startHour; hour <= endHour - 2; hour += 2) {
      slots.push(format(new Date().setHours(hour, 0), 'h:mm a'));
    }
    
    // Add the final 5 PM slot if not already included
    if ((endHour - startHour) % 2 !== 0) {
      slots.push(format(new Date().setHours(endHour, 0), 'h:mm a'));
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-3">
        {timeSlots.map((time) => (
          <Button
            key={time}
            variant={selectedTime === time ? "default" : "outline"}
            className={`h-16 ${
              selectedTime === time ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => onSelect(time)}
          >
            <Clock className="mr-2 h-4 w-4" />
            {time}
          </Button>
        ))}
      </div>
    </div>
  );
}