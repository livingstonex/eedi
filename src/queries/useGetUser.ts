import {
  QueryObserverOptions,
  queryOptions,
  useQuery,
} from '@tanstack/react-query';
import { getUser } from '../api/user';
import { userSchema } from '../api/user';
import { z } from 'zod';

type User = z.infer<typeof userSchema>;

type CustomOptions = Pick<QueryObserverOptions<User>, 'enabled'>;

const getUserQueryOptions = (id: number, options: CustomOptions = {}) =>
  queryOptions({
    retry: 2,
    staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
    ...options,
    queryKey: ['/user', id],
    queryFn: () => getUser(id),
  });

export function useGetUser(id: number, options: CustomOptions = {}) {
  return useQuery<User>(getUserQueryOptions(id, options));
}
