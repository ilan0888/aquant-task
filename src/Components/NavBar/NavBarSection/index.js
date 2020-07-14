import React from 'react';
import styles from './styles.module.css';
import {NavLink, Link} from "react-router-dom";

const Menu = ({text, img, to}) => {
    return (
        <NavLink to={to} exact={to === '/'} className={styles.link} activeClassName={styles.activeLink}><img className={styles.icon}  src={img}/>{text}</NavLink>
    );
};

export default Menu;