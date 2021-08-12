import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {HashRouter} from 'react-router-dom';
import {App} from './App';
import './index.css';

ReactDOM.render(<HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
  document.getElementById('root')
);