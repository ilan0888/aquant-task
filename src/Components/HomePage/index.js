import React from 'react';
import Map from "../../Containers/HomePage/Map";
import styles from './styles.module.css';
import UserInput from "../../Containers/HomePage/UserInput";

const HomePage = ({}) => {
    return (
        <div className={styles.container}>
            <UserInput/>
            <Map />
        </div>
    );
};

export default HomePage;