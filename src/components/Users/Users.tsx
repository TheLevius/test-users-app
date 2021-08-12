import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../../App.module.css';
import {AppStateType} from '../../redux/store';
import {UserType} from '../../api/users-api';
import {User} from './User/User';
import {getUsersTC} from '../../redux/app-reducer';
import {UserSetter} from './UserSetter/UserSetter';

export const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector<AppStateType, UserType[]>(state => state.app.users);

    const getUsersClickHandle = () => {

        dispatch(getUsersTC())
    }
    return (
        <div className={styles.usersContainer}>
            <div className={styles.usersPanel}>
                <div className={styles.usersGetBox}>
                    <button onClick={getUsersClickHandle}>Download users</button>
                </div>
                <div className={styles.usersSetBox}>
                    <UserSetter />
                </div>
            </div>
            <div className={styles.usersBox}>
                {users.map(user => (
                    <User key={user.id}
                          id={user.id}
                          email={user.email}
                          avatar={user.avatar}
                          first_name={user.first_name}
                          last_name={user.last_name}
                    />
                ))}
            </div>
        </div>
    )

}