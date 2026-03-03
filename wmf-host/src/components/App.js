import React, { Suspense } from 'react';
import { SimpleComponent } from './SimpleComponent';
import { ErrorBoundary } from './ErrorBoundary';

// import { showAlert } from 'remoteApp/utils'
const { showAlert } = await import('remoteApp/utils');

// import RemoteComponent from 'remoteApp/RemoteComponent';
const RemoteComponent = await React.lazy(() => import('remoteApp/RemoteComponent'));

import '../styles/App.css';

const App = () => (
    <div>
        <h1>
            React App (Host)
            <button onClick={() => showAlert('WOW!!!')}>click</button>
        </h1>
        <SimpleComponent />
        <ErrorBoundary>
            <Suspense fallback={<div>Загрузка...</div>}>
                <RemoteComponent title="fromHost" />
            </Suspense>
            <div />
        </ ErrorBoundary>
        <SimpleComponent />
    </div>
);

export default App;
