import { configureStore } from '@reduxjs/toolkit';
import remoteSlice from './slices/remoteSlice' 

export const store = configureStore({
  reducer: {
    remoteSlice,
  },
});