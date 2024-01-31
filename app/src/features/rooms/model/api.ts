import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IRoom } from './interfaces';

export const roomsApi = createApi({
  reducerPath: 'roomsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
  endpoints: (builder) => ({
    getRooms: builder.query<IRoom[], void>({
      query: () => `/rooms`
    })
  })
});

export const { useGetRoomsQuery } = roomsApi;
