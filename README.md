# EEDI - React + TypeScript + Vite

## Prerequisite

- Node (v18 | v20) and npm -- If you don't have node installed, it's recommended that you use [nvm](https://github.com/nvm-sh/nvm) for the installation, otherwise ensure you've the right node version for the project as defined in the project's [.nvmrc](https://github.com/Fundthrough/nebula/blob/development/.nvmrc)

## How to Install

1. `npm install`
2. `npm run dev` to start the dev server

- **Note:** you will need a `.env` file under root `./` directory. You can get the env from me or you can create yours with the value of the placeholder API as VITE_BASE_API_URL=value_of_the_api_url, otherwise you will run into errors related to making API requests.

## Tests

To run all tests, simple run the command `npm run test`

## App Structure and Conventions

This is a guide for building different kind of components and how to structure the relationship between them.

### Data

- ReactQuery: Manages all data fetching lifecycle and states, provides elegant handling of caching, fetch status update, cache invalidations, etc.

### Type Validations

- Zod: We have leveraged the zod library to provide data typing and data validation capabilities to our application.

### Custom Hooks

- Custom hooks where used to handle queries using the ReactQuery api client. One of those can be found in the: `/queries/usersGetUser.ts` and `/queries/userGetUser.ts`
  Sample Query client:

```ts
// useGetUser.ts
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
```
