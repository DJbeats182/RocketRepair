import { NextRequest, NextResponse } from 'next/server';
import { getApiUrl } from '@/lib/config/maps';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { input } = body;

    if (!input) {
      return NextResponse.json({ 
        predictions: [], 
        status: 'ZERO_RESULTS' 
      });
    }

    const url = getApiUrl('autocomplete', {
      input,
      types: 'address',
      components: 'country:us',
      language: 'en',
      region: 'US',
    });

    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK' || data.status === 'ZERO_RESULTS') {
      return NextResponse.json(data);
    }

    throw new Error(data.error_message || `Google Places API error: ${data.status}`);
  } catch (error) {
    console.error('Places API Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch places',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}