import React from 'react';
import {Users} from './components/Users/Users';

export const App = ({...props}) => {

    console.log('app render');
    return (
        <div className={'app'}>
                <Users />
        </div>
    );
}
