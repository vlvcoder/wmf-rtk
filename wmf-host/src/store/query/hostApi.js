import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hostApi = createApi({
  reducerPath: 'hostApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
  endpoints: (builder) => ({
        getRacesHost: builder.query({
            query: () => '/races-host',
        }),
  }),
});

export const { useGetRacesHostQuery } = hostApi;