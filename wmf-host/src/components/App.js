import { Suspense, lazy, useState } from 'react';
import { SimpleComponent } from './SimpleComponent';
import { ErrorBoundary } from './ErrorBoundary';
import { DisplayObject } from 'remoteApp/DisplayObject';

// import { showAlert } from 'remoteApp/utils'
// const { showAlert } = await import('remoteApp/utils');

// import RemoteComponent from 'remoteApp/RemoteComponent';
// const RemoteComponent = await lazy(() => import('remoteApp/RemoteComponent'));
// const { DisplayObject } = await import('remoteApp/DisplayObject');

import '../styles/App.css';
import { useGetRacesHostQuery } from '../store/query/hostApi';
import { ContainerForRemotes } from './ContainerForRemotes';

const App = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <h1>
                React App (Host)
            </h1>
            <button onClick={() => showAlert('WOW!!!')}>showAlert from remote</button>
             
            <button onClick={() => setShow(true)}>show remotes</button>
            <br />
            <br />
            {
                show &&
                <ContainerForRemotes />
            }
            <SimpleComponent />
        </div>
    );
};

export default App;
