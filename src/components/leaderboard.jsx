import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'; // Adjust the path as necessary

function Leaderboard() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetch('profiles.json')
            .then(response => response.json())
            .then(data => {
                const sortedProfiles = Object.values(data.profiles).sort(
                    (a, b) => b.Donation - a.Donation
                );
                setProfiles(sortedProfiles);
            });
    }, []);

    return (
        <div className={styles.leaderboard}>
            <h2 className={styles.header}>Top Donors</h2>
            <ol>
                {profiles.map((profile, index) => (
                    <li key={index}>
                        {profile.firstName} {profile.lastName}
                        <span>
                            {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            }).format(profile.Donation)}
                        </span>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Leaderboard;