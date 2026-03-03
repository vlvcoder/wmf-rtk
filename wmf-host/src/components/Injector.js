import { injectReducer, store } from '../store/store';

const module = await import('remoteApp/remoteSlice');
injectReducer('remoteSlice', module.default);

// console.log('===========');
// console.log(store.getState().host.status);
// console.log(store.getState().remoteSlice.status);
// await store.dispatch({ type: 'host/increment', payload:  store.getState().host.status });
// console.log('===========');

export const Injector = ({ children }) => children;
