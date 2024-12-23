export class PlacesApiError extends Error {
  constructor(
    message: string,
    public readonly code?: string,
    public readonly status?: number
  ) {
    super(message);
    this.name = 'PlacesApiError';
  }
}

export function handlePlacesApiError(error: unknown): PlacesApiError {
  if (error instanceof PlacesApiError) {
    return error;
  }

  if (error instanceof Error) {
    return new PlacesApiError(error.message);
  }

  return new PlacesApiError('An unknown error occurred');
}