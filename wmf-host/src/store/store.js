import { configureStore, combineReducers } from '@reduxjs/toolkit';
import hostReducer from './slices/hostSlice' 

const staticReducers = {
  host: hostReducer,
};

// хранилище для асинхронных редьюсеров
const asyncReducers = {};

export const store = configureStore({
  reducer: combineReducers({ ...staticReducers, ...asyncReducers }),
});

// функция для инъекции нового редьюсера
export const injectReducer = (key, reducer) => {
  if (!asyncReducers[key]) {
    asyncReducers[key] = reducer;
    store.replaceReducer(combineReducers({ ...staticReducers, ...asyncReducers }));
  }
};

