"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import AddressAutocomplete from './address-search/autocomplete';
import ServiceSelection from './service-selection';
import DateTimeSelection from './date-time-selection';

type BookingStep = 'address' | 'service' | 'datetime';

interface BookingState {
  address: string;
  chipCount: number;
  appointmentDate?: Date;
  appointmentTime?: string;
}

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState<BookingStep>('address');
  const [bookingData, setBookingData] = useState<BookingState>({
    address: '',
    chipCount: 1,
  });

  const handleAddressSelect = (address: string) => {
    setBookingData(prev => ({ ...prev, address }));
    setCurrentStep('service');
  };

  const handleServiceSelect = (chipCount: number) => {
    setBookingData(prev => ({ ...prev, chipCount }));
    setCurrentStep('datetime');
  };

  const handleDateTimeSelect = (date: Date, time: string) => {
    setBookingData(prev => ({
      ...prev,
      appointmentDate: date,
      appointmentTime: time,
    }));
    // Handle final submission here
    console.log('Final booking data:', {
      ...bookingData,
      appointmentDate: date,
      appointmentTime: time,
    });
  };

  const handleBack = () => {
    if (currentStep === 'service') {
      setCurrentStep('address');
    } else if (currentStep === 'datetime') {
      setCurrentStep('service');
    }
  };

  return (
    <Card className="max-w-3xl mx-auto bg-white border border-gray-100 shadow-lg rounded-2xl overflow-visible">
      {currentStep === 'address' && (
        <AddressAutocomplete onSelect={handleAddressSelect} />
      )}
      {currentStep === 'service' && (
        <ServiceSelection
          onBack={handleBack}
          onNext={handleServiceSelect}
        />
      )}
      {currentStep === 'datetime' && (
        <DateTimeSelection
          onBack={handleBack}
          onNext={handleDateTimeSelect}
        />
      )}
    </Card>
  );
}