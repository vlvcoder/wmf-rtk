import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { remoteApi } from './query/remoteApi';
import { remoteSlice } from './slices/remoteSlice';

export const store = configureStore({
  reducer: combineReducers({
    remoteSlice: remoteSlice.reducer,
    remoteApi: remoteApi.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(remoteApi.middleware),
});