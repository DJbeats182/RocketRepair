export const PLACES_API = {
  BASE_URL: 'https://maps.googleapis.com/maps/api/place',
  DEFAULT_REGION: 'US',
  DEFAULT_LANGUAGE: 'en',
  SEARCH_TYPES: ['address'],
  DEBOUNCE_MS: 300,
} as const;

export const ERROR_MESSAGES = {
  MISSING_API_KEY: 'Google Maps API key is not configured',
  INVALID_API_KEY: 'Invalid Google Maps API key',
  NETWORK_ERROR: 'Network error occurred while fetching suggestions',
  GENERAL_ERROR: 'An error occurred while fetching suggestions',
} as const;