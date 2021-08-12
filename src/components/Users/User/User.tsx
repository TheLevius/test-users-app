import React, {FC} from 'react';
import {UserType} from '../../../api/users-api';
import styles from './User.module.css';
import {useDispatch} from 'react-redux';
import {appActions} from '../../../redux/app-reducer';

export const User: FC<UserType> = React.memo(({id, avatar, email, first_name, last_name}) => {
    const dispatch = useDispatch();
    const placeholder = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

    const deleteClickHandle = () => {
        dispatch(appActions.userDeletedAC(id));
    }
    console.log('user render')
    return (
        <div className={styles.userRow}>
            <div>{id}</div>
            <div>
                <img src={!!avatar ? avatar : placeholder}
                     alt={`The avatar of ${first_name} ${last_name}`}
                     className={styles.userPic}
                />
            </div>
            <div><span>{first_name} {last_name}</span></div>
            <div><span>email: {email}</span></div>
            <div>
                <button onClick={deleteClickHandle}>Delete</button>
            </div>
        </div>
    )
});