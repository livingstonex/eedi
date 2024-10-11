import {
  QueryObserverOptions,
  useQuery,
  queryOptions,
} from '@tanstack/react-query';
import { getUsers, userSchema } from '../api/users';
import { z } from 'zod';

type User = z.infer<typeof userSchema>;

type CustomOptions = Pick<QueryObserverOptions<User[]>, 'enabled'>;

const getUsersQueryOptions = (options: CustomOptions = {}) =>
  queryOptions({
    queryKey: ['/users'],
    queryFn: getUsers,
    retry: 2,
    staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
    ...options,
  });

export function useGetUsers(options: CustomOptions = {}) {
  return useQuery<User[]>(getUsersQueryOptions(options)); // Specify that the data is an array of User
}
