"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface NextButtonProps {
  onClick: () => void;
}

export default function NextButton({ onClick }: NextButtonProps) {
  return (
    <div className="flex justify-end p-4 border-t border-gray-100">
      <Button 
        onClick={onClick}
        size="lg" 
        className="group font-semibold"
      >
        Next Step
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
      </Button>
    </div>
  );
}