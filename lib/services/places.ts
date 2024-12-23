import { getApiUrl } from '@/lib/config/maps';
import { PlaceResult } from '@/lib/types/google-maps';

interface PlacesResponse {
  predictions: PlaceResult[];
  status: string;
  error_message?: string;
}

export async function getPlacePredictions(input: string): Promise<PlacesResponse> {
  if (!input?.trim()) {
    return { predictions: [], status: 'ZERO_RESULTS' };
  }

  try {
    const response = await fetch('/api/places/autocomplete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching place predictions:', error);
    throw error;
  }
}