import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICard } from 'models/card';

interface IMTGServiceResponse {
  cards: ICard[];
  total: number;
}

export const mtgService = createApi({
  reducerPath: 'mtgService',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.magicthegathering.io/v1' }),
  endpoints: (build) => ({
    fetchCards: build.query<IMTGServiceResponse, { name: string; pageSize: number }>({
      query: ({ name, pageSize = 10 }) => ({
        url: `/cards`,
        params: {
          name,
          pageSize,
          contains: 'imageUrl',
        },
        responseHandler: async (response) => {
          const total = response.headers.get('total-count');
          const { cards } = await response.json();
          return { total: total ? total : 0, cards };
        },
      }),
    }),
  }),
});

export const { useFetchCardsQuery } = mtgService;
