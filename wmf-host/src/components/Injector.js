import { addMiddleware, injectReducer, store } from '../store/store';

const sliceModule = await import('remoteApp/remoteSlice');
injectReducer('remoteSlice', sliceModule.remoteSlice.reducer);

const apiModule = await import('remoteApp/remoteApi');
injectReducer('remoteApi', apiModule.remoteApi.reducer);
addMiddleware(apiModule.remoteApi.middleware);

console.log('===========');
console.log(store.getState().hostSlice.status);
console.log(store.getState().remoteSlice.status);
await store.dispatch({ type: 'hostSlice/increment' });
await store.dispatch({ type: 'remoteSlice/setStatus', payload:  store.getState().hostSlice.status });
console.log('===========');

export const Injector = ({ children }) => {
    return children;
};
