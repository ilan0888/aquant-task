import React from 'react';
import styles from './styles.module.css';
import {NavLink, Link} from "react-router-dom";

const Menu = ({text, clearPlanATripReducer}) => {
    return (
            <NavLink onClick={clearPlanATripReducer} to={'/plan-a-trip'} className={styles.text}>
                <div className={styles.container}>
                    {text}
                </div>
            </NavLink>
    );
};

export default Menu;