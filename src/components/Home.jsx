import React from 'react';
import Leaderboard from './leaderboard';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.leaderboard}>
            <h1 className={styles.leaderboard}>Welcome To Montserrat!</h1>
            <Leaderboard />
        </div>
    );
}