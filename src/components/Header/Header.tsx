import React, {FC, useState} from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

export const Header: FC<{}> = ({...props}) => {

    const [links] = useState( [
        {name: 'Main', path: '/'},
        {name: 'Employees', path: '/employees'},
        ]);

    return(
        <div className={styles.wrapper}>
            <nav className={styles.navBox}>
                {links.map(link => (
                    <NavLink exact to={`${link.path}`} key={link.name} className={styles.navLink} activeClassName={styles.activeNavLink}>
                        <span>{link.name}</span>
                    </NavLink>
                ))}
            </nav>
        </div>
    )
}