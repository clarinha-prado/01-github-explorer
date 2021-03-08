import { Fragment } from 'react';
import '../src/styles/global.scss';
import { RepositoryList } from './components/RepositoryList';

export function App() {
    return (
        <>
            <RepositoryList />
        </>
    );
}