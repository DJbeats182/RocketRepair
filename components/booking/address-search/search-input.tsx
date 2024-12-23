"use client";

import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  error?: string | null;
}

export default function SearchInput({ value, onChange, onFocus, error }: SearchInputProps) {
  const handleClear = () => {
    onChange('');
  };

  return (
    <div className="relative p-4">
      <Search 
        className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400 z-10 pointer-events-none" 
        size={20} 
      />
      <Input
        type="text"
        placeholder="Enter your address"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        className="pl-14 pr-12 py-6 w-full bg-white border-gray-200 text-gray-900 placeholder-gray-400 text-lg rounded-full
          focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:rounded-full
          hover:border-gray-300 transition-all duration-200"
        aria-label="Search address"
        aria-describedby={error ? "search-error" : undefined}
        autoComplete="off"
      />
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}