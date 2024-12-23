"use client";

import { usePlacesAutocomplete } from '@/hooks/use-places-autocomplete';
import { validateMapsConfig } from '@/lib/config/maps';
import SearchInput from './search-input';
import SuggestionList from './suggestion-list';
import { PlaceResult } from '@/lib/types/google-maps';

interface AddressAutocompleteProps {
  onSelect?: (address: string) => void;
}

export default function AddressAutocomplete({ onSelect }: AddressAutocompleteProps) {
  const {
    query,
    setQuery,
    selectAddress,
    suggestions,
    isLoading,
    error,
    isLoaded
  } = usePlacesAutocomplete();

  if (!isLoaded) {
    return (
      <div className="p-4">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-14 bg-gray-100 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  const handleSelect = (suggestion: PlaceResult) => {
    selectAddress(suggestion.description);
    if (onSelect) {
      onSelect(suggestion.description);
    }
  };

  return (
    <div className="relative w-full">
      <SearchInput
        value={query}
        onChange={setQuery}
        error={error}
      />
      
      {isLoading && (
        <div className="absolute w-full px-4">
          <div className="w-full bg-white rounded-2xl shadow-lg p-4">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
              <span className="ml-2 text-gray-600">Loading suggestions...</span>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute w-full px-4">
          <div 
            className="w-full bg-white rounded-2xl shadow-lg p-4" 
            id="search-error" 
            role="alert"
          >
            <p className="text-red-500 text-sm">{error}</p>
          </div>
        </div>
      )}

      <SuggestionList
        suggestions={suggestions}
        onSelect={handleSelect}
      />
    </div>
  );
}