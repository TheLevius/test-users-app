import {usersAPI, UserType} from '../api/users-api';
import {Dispatch} from 'redux';
import {v1} from 'uuid';


const initialState: InitialStateType = {
    error: null,
    users: [{
        id: 0,
        email: 'something@anything.com',
        first_name: 'Jack',
        last_name: 'Jones',
        avatar: ''
    }]
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch(action.type) {
        case 'APP/ERROR_DETECTED':
        case 'APP/USERS_CHANGED':
            return ({
                ...state,
                ...action.payload
            });
        case 'APP/USER_DELETED':
            return ({
                ...state,
                users: [...state.users.filter(u => u.id !== action.payload.userId)]
            })
        case 'APP/USER_ADDED':
            return ({
                ...state,
                users: [{
                    id: Math.floor(Math.random() * 1000),
                    avatar: '',
                    ...action.payload
                }, ...state.users]
            })
        default: return state;
    }
}

export const appActions = {
    errorDetectedAC: (error: string | null) => ({type: 'APP/ERROR_DETECTED', payload: {error}} as const),
    usersChangedAC: (users: UserType[]) => ({type: 'APP/USERS_CHANGED', payload: {users}} as const),
    userDeletedAC: (userId: number) => ({type: 'APP/USER_DELETED', payload: {userId}} as const),
    userAddedAC: (first_name: string, last_name: string, email: string) => ({type: 'APP/USER_ADDED', payload: {
        first_name,
        last_name,
        email
        } } as const)
}
type InferActionsType<T> = T extends {[key: string]: infer P } ? P : never;
export type AppActionsType = ReturnType<InferActionsType<typeof appActions>>

export const getUsersTC = () => async (dispatch: Dispatch) => {
    try {
        const {data} = await usersAPI.getUsers();
        dispatch(appActions.usersChangedAC(data.data));
    }
    catch(error) {
        dispatch(appActions.errorDetectedAC(error))
    }
}

type InitialStateType = {
    error: string | null;
    users: UserType[]
}