import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {appReducer} from './app-reducer';
const rootReducer = combineReducers({
    app: appReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export const store = createStore(rootReducer, applyMiddleware(thunk));