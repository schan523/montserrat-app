import React from 'react';
import Leaderboard from './leaderboard';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <h1 className={styles.leaderboard}>Welcome To Montserrat!</h1>
                <p className={styles.intro}>
                    Rooted in the Ignatian and Catholic mission of Boston College, the Montserrat Office serves students with the highest levels of financial need, helping them become active participants in their Jesuit education, while aiding in their academic, social, and spiritual formation.
                </p>
                <div className={styles.sectionBoxes}>
                    <div className={styles.sectionBox}>
                        <img src="https://cdn.glitch.global/03e7f1b3-0491-4fc8-9305-999335b1ea76/Screenshot%202024-12-01%20203547.png?v=1733104026522" alt="Description 1" className={styles.image} />
                        <h3 className={styles.heading}>Meet the Staff</h3>
                        <p className={styles.text}>The Montserrat Office aims to assist students at the highest level of financial need to actively participate in and experience a Jesuit education.</p>
                    </div>
                    <div className={styles.sectionBox}>
                        <img src="https://cdn.glitch.global/03e7f1b3-0491-4fc8-9305-999335b1ea76/1688570149450.jpg?v=1732321405829" alt="Description 2" className={styles.image} />
                        <h3 className={styles.heading}>What is Montserrat?</h3>
                        <p className={styles.text}>Montserrat is an office in the Division of Mission and Ministry who's mission is to provide students with access and support to all areas of student life not incorporated in a financial aid package. We strive to guide students in fulfilling the Jesuit initiative holistically.</p>
                    </div>
                    <div className={styles.sectionBox}>
                        <img src="https://cdn.glitch.global/03e7f1b3-0491-4fc8-9305-999335b1ea76/montserrat.JPG?v=1733104350740" alt="Description 3" className={styles.image} />
                        <h3 className={styles.heading}>Get Involved!</h3>
                        <p className={styles.text}>Stop by the Montserrat office and get to know everyone and learn just how much Montserrat can help!</p>
                    </div>
                </div>
                <p className={styles.donateMessage}>Make sure to donate below!</p>
            </div>
            <Leaderboard />
        </div>
    );
}