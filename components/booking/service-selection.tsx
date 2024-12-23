"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';

interface ServiceSelectionProps {
  onBack: () => void;
  onNext: (chips: number) => void;
}

export default function ServiceSelection({ onBack, onNext }: ServiceSelectionProps) {
  const [chipCount, setChipCount] = useState(1);
  const basePrice = 100;
  const additionalChipPrice = 20;
  
  const totalPrice = basePrice + (chipCount - 1) * additionalChipPrice;

  return (
    <div className="space-y-6 p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Your Service</h2>
        <p className="text-gray-600">
          First chip repair is $100, additional chips are $20 each
        </p>
      </div>

      <Card className="p-6 bg-white shadow-lg border border-gray-100">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Rock Chip Repairs</h3>
              <p className="text-gray-600 mt-1">How many chips need repair?</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setChipCount(Math.max(1, chipCount - 1))}
                disabled={chipCount <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-xl font-semibold w-8 text-center">{chipCount}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setChipCount(chipCount + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total Price:</span>
              <span className="text-2xl font-bold text-blue-600">${totalPrice}</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Includes {chipCount} chip repair{chipCount > 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </Card>

      <div className="flex justify-between pt-4">
        <Button
          variant="outline"
          onClick={onBack}
        >
          Back
        </Button>
        <Button
          onClick={() => onNext(chipCount)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}