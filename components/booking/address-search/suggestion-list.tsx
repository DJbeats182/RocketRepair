"use client";

import { PlaceResult } from '@/lib/types/google-maps';
import { MapPin } from 'lucide-react';

interface SuggestionListProps {
  suggestions: PlaceResult[];
  onSelect: (suggestion: PlaceResult) => void;
}

export default function SuggestionList({ suggestions, onSelect }: SuggestionListProps) {
  if (!suggestions.length) return null;

  return (
    <div className="absolute w-full px-4">
      <ul 
        className="w-full bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden mt-1" 
        role="listbox"
      >
        {suggestions.map((suggestion) => (
          <li 
            key={suggestion.place_id}
            className="border-b border-gray-50 last:border-none"
          >
            <button
              className="w-full text-left px-6 py-4 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200 flex items-start gap-3"
              onClick={() => onSelect(suggestion)}
              role="option"
            >
              <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">
                  {suggestion.structured_formatting?.main_text || suggestion.description.split(',')[0]}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {suggestion.structured_formatting?.secondary_text || suggestion.description.split(',').slice(1).join(',')}
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}