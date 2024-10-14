import { parseWith } from '../utils/validateApiResponse';
import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
});

export const usersSchema = z.array(userSchema);

export async function getUsers() {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}${getUsers.endpoint}`,
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();

  // Select only id, name and email
  const selectedData = data.map((user: Record<string, any>) => ({
    id: user.id,
    name: user.name,
    email: user.email,
  }));

  return parseWith(getUsers.responseSchema)(selectedData); // Validate the response
}

getUsers.endpoint = '/users';
getUsers.responseSchema = usersSchema;
