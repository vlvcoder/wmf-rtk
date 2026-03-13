import { Suspense, lazy } from 'react';
import { ErrorBoundary } from "./ErrorBoundary";
import RemoteComponent from 'remoteApp/RemoteComponent';
import { DisplayObject } from 'remoteApp/DisplayObject';
import { useGetRacesHostQuery } from '../store/query/hostApi';
import { Injector } from './Injector';

export const ContainerForRemotes = () => {
    const { data } = useGetRacesHostQuery();
    return (
        <Injector>
            <ErrorBoundary>
                <Suspense fallback={<div>Загрузка RemoteComponent...</div>}>
                    <RemoteComponent title="fromHost" />
                </Suspense>
                <br />
                <Suspense fallback={<div>Загрузка DisplayObject...</div>}>
                    <DisplayObject source={data} style={{ outline: '3px dashed orangered' }} />
                </Suspense>
            </ ErrorBoundary>
        </Injector>
    );
};
