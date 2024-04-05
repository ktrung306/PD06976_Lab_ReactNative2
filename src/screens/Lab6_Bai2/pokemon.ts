import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export interface PokemonType {
  name: string;
  height: number;
  weight: number;
}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://pokeapi.co/api/v2',
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<PokemonType, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useLazyGetPokemonByNameQuery, useGetPokemonByNameQuery} = pokemonApi;