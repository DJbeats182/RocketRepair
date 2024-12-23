"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import Calendar from "./calendar";
import TimeSlots from "./time-slots";

interface DateTimeSelectionProps {
  onBack: () => void;
  onNext: (date: Date, time: string) => void;
}

export default function DateTimeSelection({ onBack, onNext }: DateTimeSelectionProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      onNext(selectedDate, selectedTime);
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Date & Time</h2>
        <p className="text-gray-600">
          Choose your preferred appointment date and time
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Select Date</h3>
          <Calendar
            selectedDate={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>

        {selectedDate && (
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Available Times for {format(selectedDate, "MMMM d, yyyy")}
            </h3>
            <TimeSlots
              selectedTime={selectedTime}
              onSelect={setSelectedTime}
            />
          </div>
        )}
      </div>

      <div className="flex justify-between pt-4">
        <Button
          variant="outline"
          onClick={onBack}
        >
          Back
        </Button>
        <Button
          onClick={handleContinue}
          disabled={!selectedDate || !selectedTime}
        >
         Select {selectedDate?.toDateString()} at {selectedTime?.toString()}
        </Button>
      </div>
    </div>
  );
}