import { usePlacesAutocomplete } from '@/hooks/use-places-autocomplete';
import { validateMapsConfig } from '@/lib/config/maps';
import { ERROR_MESSAGES } from '@/lib/config/constants';
import SearchInput from './search-input';
import SuggestionList from './suggestion-list';
import { PlaceResult } from '@/lib/types/google-maps';

interface AddressSearchProps {
  onSelect: (address: string) => void;
}

export default function AddressSearch({ onSelect }: AddressSearchProps) {
  const {
    query,
    setQuery,
    suggestions,
    isLoading,
    error
  } = usePlacesAutocomplete();

  // Validate Maps configuration on component mount
  try {
    validateMapsConfig();
  } catch (error) {
    return (
      <div className="text-red-500 p-4 border border-red-200 rounded-md">
        {ERROR_MESSAGES.MISSING_API_KEY}
      </div>
    );
  }

  const handleSelect = (suggestion: PlaceResult) => {
    onSelect(suggestion.description);
    setQuery(suggestion.description);
  };

  return (
    <div className="relative">
      <SearchInput
        value={query}
        onChange={setQuery}
        error={error}
      />
      
      {isLoading && (
        <div className="absolute w-full bg-white mt-1 rounded-md shadow-lg p-2 z-10">
          <p className="text-gray-500 text-sm">Loading suggestions...</p>
        </div>
      )}

      {error && (
        <div 
          className="absolute w-full bg-white mt-1 rounded-md shadow-lg p-2 z-10 text-red-500" 
          id="search-error" 
          role="alert"
        >
          {error}
        </div>
      )}

      <SuggestionList
        suggestions={suggestions}
        onSelect={handleSelect}
      />
    </div>
  );
}