import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const remoteApi = createApi({
  reducerPath: 'remoteApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
  endpoints: (builder) => ({
        getRacesRemote: builder.query({
            query: () => '/races-remote',
        }),
  }),
});

export const { useGetRacesRemoteQuery } = remoteApi;
