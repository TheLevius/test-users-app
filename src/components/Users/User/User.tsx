import React, {FC} from 'react';
import {UserType} from '../../../api/users-api';
import styles from './User.module.css';
import {useDispatch} from 'react-redux';
import {appActions} from '../../../redux/app-reducer';
import plugAva from './../../../assets/img/png/cybava.png';

export const User: FC<UserType> = React.memo(({id, avatar, first_name, last_name}) => {
    const dispatch = useDispatch();

    const deleteClickHandle = () => {
        dispatch(appActions.userDeletedAC(id));
    }
    console.log('user render')
    return (
        <div className={styles.userCell}>
            <div className={styles.userPicCol}>
                <img src={!!avatar ? avatar : plugAva}
                     alt={`The avatar of ${first_name} ${last_name}`}
                     className={styles.userPic}
                />
            </div>
            <div className={styles.userNameCol}><span>{first_name} {last_name}</span></div>
            <div className={styles.userDeleteCol}>
                <button onClick={deleteClickHandle}>Delete</button>
            </div>
        </div>
    )
});