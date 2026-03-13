import { configureStore, combineReducers, createDynamicMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { hostApi } from './query/hostApi';
import { hostSlice } from './slices/hostSlice';

const staticReducers = {
  hostSlice: hostSlice.reducer,
  hostApi: hostApi.reducer,
};

// хранилище для асинхронных редьюсеров
const asyncReducers = {};

const dynamicMiddleware = createDynamicMiddleware();

const logger = createLogger({
    collapsed: (_getState, _action, logEntry) => !logEntry.error,
    colors: {
        title: () => '#f9a9a9',
        prevState: () => '#9E9E9E',
        action: () => '#00A7DB',
        nextState: () => '#118A01',
        error: () => '#FF2A00',
    }
});

export const store = configureStore({
  reducer: combineReducers({
    ...staticReducers,
    ...asyncReducers,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .prepend(dynamicMiddleware.middleware)
    .concat(hostApi.middleware)
    .concat(logger),
});

// функция для инъекции нового редьюсера
export const injectReducer = (key, reducer) => {
  if (!asyncReducers[key]) {
    asyncReducers[key] = reducer;
    store.replaceReducer(combineReducers({ ...staticReducers, ...asyncReducers }));
  }
};

export const { addMiddleware } = dynamicMiddleware;