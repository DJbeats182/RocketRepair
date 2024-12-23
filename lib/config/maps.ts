import { z } from 'zod';

const configSchema = z.object({
  apiKey: z.string().min(1, 'API key is required'),
  region: z.string().default('US'),
  language: z.string().default('en'),
});

export type MapsConfig = z.infer<typeof configSchema>;

export const GOOGLE_MAPS_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  region: 'US',
  language: 'en',
} as const;

export function validateMapsConfig(): MapsConfig {
  const config = configSchema.parse(GOOGLE_MAPS_CONFIG);
  return config;
}

export function getApiUrl(endpoint: string, params: Record<string, string>) {
  const config = validateMapsConfig();
  const url = new URL(`https://maps.googleapis.com/maps/api/place/${endpoint}/json`);
  
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });
  
  url.searchParams.append('key', config.apiKey);
  return url.toString();
}