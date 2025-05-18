import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export async function fetchVacancies(endpoint) {
  const response = await fetch(`http://localhost:8000/api/${endpoint}/`);

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}