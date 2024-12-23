export interface PlaceResult {
  description: string;
  place_id: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

export interface AutocompleteState {
  isLoading: boolean;
  suggestions: PlaceResult[];
  error: string | null;
}