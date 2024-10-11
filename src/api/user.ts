import { parseWith } from '..//utils/validateApiResponse';
import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  address: z.object({
    street: z.string(),
    suite: z.string(),
    city: z.string(),
    zipcode: z.string(),
    geo: z.object({
      lat: z.string(),
      lng: z.string(),
    }),
  }),
  phone: z.string(),
  website: z.string(),
  company: z.object({
    name: z.string(),
    catchPhrase: z.string(),
    bs: z.string(),
  }),
});

export async function getUser(user_id: number) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}${getUser.endpoint}/${user_id}`,
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();

  return parseWith(getUser.responseSchema)(data); // Validate the response
}

getUser.endpoint = '/users';
getUser.responseSchema = userSchema;
