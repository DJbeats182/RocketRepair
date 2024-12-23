import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { usePlacesAutocomplete } from '@/hooks/use-places-autocomplete';
import { validateMapsConfig } from '@/lib/config/maps';

interface AddressSearchProps {
  onSelect: (address: string) => void;
}

export default function AddressSearch({ onSelect }: AddressSearchProps) {
  const { query, setQuery, suggestions, isLoading, error } = usePlacesAutocomplete();

  // Validate Maps configuration on component mount
  try {
    validateMapsConfig();
  } catch (error) {
    return (
      <div className="text-red-500">
        Google Maps is not properly configured. Please check your configuration.
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input
          type="text"
          placeholder="Enter your address"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-4 py-3 w-full"
          aria-label="Search address"
          aria-describedby={error ? "search-error" : undefined}
        />
      </div>
      
      {isLoading && (
        <div className="absolute w-full bg-white mt-1 rounded-md shadow-lg p-2 z-10">
          <p className="text-gray-500 text-sm">Loading suggestions...</p>
        </div>
      )}

      {error && (
        <div className="absolute w-full bg-white mt-1 rounded-md shadow-lg p-2 z-10" id="search-error" role="alert">
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      )}

      {suggestions.length > 0 && (
        <ul className="absolute w-full bg-white mt-1 rounded-md shadow-lg z-10" role="listbox">
          {suggestions.map((suggestion) => (
            <li key={suggestion.place_id}>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                onClick={() => {
                  onSelect(suggestion.description);
                  setQuery(suggestion.description);
                }}
                role="option"
              >
                <p className="font-medium">{suggestion.structured_formatting.main_text}</p>
                <p className="text-sm text-gray-500">{suggestion.structured_formatting.secondary_text}</p>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}