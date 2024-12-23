"use client";

import { useState, useEffect } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { PlaceResult } from '@/lib/types/google-maps';
import { useDebounce } from './use-debounce';

const libraries: ("places" | "drawing" | "geometry" | "localContext" | "visualization")[] = ["places"];

export function usePlacesAutocomplete() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<PlaceResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  
  const debouncedQuery = useDebounce(query, 300);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries,
  });

  useEffect(() => {
    if (loadError) {
      setError('Failed to load Google Maps API');
      return;
    }

    if (!isLoaded || !debouncedQuery.trim() || debouncedQuery.length < 3) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const service = new window.google.maps.places.AutocompleteService();
        const results = await new Promise<google.maps.places.AutocompletePrediction[]>((resolve, reject) => {
          service.getPlacePredictions(
            {
              input: debouncedQuery,
              componentRestrictions: { country: 'us' },
              types: ['address']
            },
            (predictions, status) => {
              if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
                resolve(predictions);
              } else {
                reject(status);
              }
            }
          );
        });

        setSuggestions(results as PlaceResult[]);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setError('Failed to fetch address suggestions');
      } finally {
        setIsLoading(false);
      }
    };

    if (isTyping) {
      fetchSuggestions();
    }
  }, [debouncedQuery, isLoaded, loadError, isTyping]);

  const handleInputChange = (value: string) => {
    setQuery(value);
    setIsTyping(true);
  };

  const handleSelectAddress = (address: string) => {
    setQuery(address);
    setIsTyping(false);
    setSuggestions([]);
  };

  return {
    query,
    setQuery: handleInputChange,
    selectAddress: handleSelectAddress,
    suggestions: isTyping ? suggestions : [],
    isLoading,
    error,
    isLoaded
  };
}