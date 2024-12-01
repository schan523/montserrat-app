import React, { useState, useEffect } from 'react';
import ProgressBar from '../components/progressBar';
import styles from '../styles/Home.module.css';

function Leaderboard() {
    const [profiles, setProfiles] = useState([]);
    const donationGoal = 50000;

    useEffect(() => {
        fetch('profiles.json')
            .then(response => response.json())
            .then(data => {
                const sortedProfiles = Object.values(data.profiles).sort((a, b) => {
                    const totalDonationA = a.donations.reduce((sum, donation) => sum + parseFloat(donation.amount), 0);
                    const totalDonationB = b.donations.reduce((sum, donation) => sum + parseFloat(donation.amount), 0);
                    return totalDonationB - totalDonationA;
                });
                setProfiles(sortedProfiles);
            })
            .catch(error => console.error('Error fetching profiles:', error));
    }, []);

    const totalDonations = profiles.reduce((sum, profile) => {
        const profileTotal = profile.donations.reduce((profileSum, donation) => {
            return profileSum + parseFloat(donation.amount);
        }, 0);
        return sum + profileTotal;
    }, 0);

    return (
        <div className={styles.leaderboard}>
            <h2 className={styles.header}>Top Donors</h2>
            <ol>
                {profiles.map((profile, index) => {
                    const profileTotal = profile.donations.reduce((profileSum, donation) => {
                        return profileSum + parseFloat(donation.amount);
                    }, 0);

                    return (
                        <li key={index}>
                            {profile.firstName} {profile.lastName}
                            <span>
                                {new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                }).format(profileTotal)}
                            </span>
                        </li>
                    );
                })}
            </ol>
            <button className={styles.redirectButton} onClick={() => navigate('/donation')}>
                Donate
            </button>
        </div>
    );
}

export default Leaderboard;