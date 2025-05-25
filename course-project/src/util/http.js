import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

const url = import.meta.env.VITE_BACKEND_URL || 'https://course-project-5iwf.onrender.com';

export async function fetchVacancies(endpoint) {
  const response = await fetch(`${url}/api/${endpoint}/`);

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

export async function sendContactMutation(formData) {
  const res = await fetch(`${url}/api/send-to-telegram/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  if (!res.ok) throw new Error('Network error');
  return res.json();
}

export async function sendJobMutation(formDataObj) {
  const formData = new FormData();
  formData.append('formType', formDataObj.formType);
  formData.append('name', formDataObj.name);
  formData.append('email', formDataObj.email);
  formData.append('message', formDataObj.message);
  if (formDataObj.vacancyTitle) {
    formData.append('vacancyTitle', formDataObj.vacancyTitle);
  }
  if (formDataObj.file) {
    formData.append('file', formDataObj.file);
  }
  const res = await fetch(`${url}/api/send-to-telegram/`, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) throw new Error('Network error');
  return res.json();
}