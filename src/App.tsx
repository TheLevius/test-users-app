import React from 'react';
import {Users} from './components/Users/Users';
import {Header} from './components/Header/Header';
import {Switch, Route} from 'react-router-dom';
export const App = ({...props}) => {

    console.log('app render');
    return (
        <div className={'app'}>
            <Header />
            <Switch>
                <Route path={'/'} exact render={()=>(
                    <div className={'main-wrapper'}>
                        <h2>Main Page</h2>
                    </div>
                )}/>
                <Route path={'/employees'} render={()=><Users />} />
            </Switch>

        </div>
    );
}
