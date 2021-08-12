import React, {ChangeEvent, FC, useState} from 'react';
import styles from './UserSetter.module.css';
import {useDispatch} from 'react-redux';
import {appActions} from '../../../redux/app-reducer';

export const UserSetter: FC<{}> = ({...props}) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState<boolean>(false);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const setEditModeToggle = () => {
        setEditMode(prev => !prev);
    }

    const addUserClickHandle = () => {
        if(!!firstName && !!lastName && !!email) {
            dispatch(appActions.userAddedAC(firstName, lastName, email));
            setFirstName('')
            setLastName('')
            setEmail('')
            setEditModeToggle();
        }
        return;
    }

    const onFirstNameChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }
    const onLastNameChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }
    const onEmailChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    if (editMode) {
        return (
            <div>
                <div className={styles.userSetForm}>
                    <label htmlFor='first-name'>
                        first name:
                        <input type={'text'} value={firstName} id={'first-name'} onChange={onFirstNameChangeHandle} />
                    </label>
                    <label htmlFor='last-name'>
                        last name:
                        <input type={'text'} value={lastName} id={'last-name'} onChange={onLastNameChangeHandle} />
                    </label>
                    <label htmlFor='email'>
                        email:
                        <input type={'text'} value={email} id={'email'} onChange={onEmailChangeHandle}/>
                    </label>
                </div>
                <div className={styles.userSetToggleHolder}>
                    <button onClick={addUserClickHandle}>Add User</button>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.userSetBtnHolder}>
            <button onClick={setEditModeToggle}>
                Add User
            </button>
        </div>
    )
}