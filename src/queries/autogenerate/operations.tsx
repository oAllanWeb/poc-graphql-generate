import * as Types from './schemas';

export type CharactersQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type CharactersQuery = { __typename?: 'Query', episode?: { __typename?: 'Episode', name?: string | null, characters: Array<{ __typename?: 'Character', id?: string | null, name?: string | null, status?: string | null, species?: string | null, image?: string | null } | null> } | null };
