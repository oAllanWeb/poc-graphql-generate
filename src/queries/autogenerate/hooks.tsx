import * as Types from "./operations";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;

export const CharactersDocument = gql`
  query Characters($id: ID!) {
    episode(id: $id) {
      name
      characters {
        id
        name
        status
        species
        image
      }
    }
  }
`;

/**
 * __useCharactersQuery__
 *
 * To run a query within a React component, call `useCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharactersQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCharactersQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.CharactersQuery,
    Types.CharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.CharactersQuery, Types.CharactersQueryVariables>(
    CharactersDocument,
    options
  );
}
export function useCharactersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.CharactersQuery,
    Types.CharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    Types.CharactersQuery,
    Types.CharactersQueryVariables
  >(CharactersDocument, options);
}
export type CharactersQueryHookResult = ReturnType<typeof useCharactersQuery>;
export type CharactersLazyQueryHookResult = ReturnType<
  typeof useCharactersLazyQuery
>;
export type CharactersQueryResult = Apollo.QueryResult<
  Types.CharactersQuery,
  Types.CharactersQueryVariables
>;
