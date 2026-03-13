import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from "./components/App.js";
import { store } from './store/store.js';
import { Injector } from './components/Injector.js';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <Provider store={store}>
        {/* <Injector> */}
            <App />
        {/* </Injector> */}
    </Provider>
);
