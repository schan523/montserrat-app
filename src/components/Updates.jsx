import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Leaderboard from './leaderboard';
import ProgressBar from '../components/progressBar';
import styles from '../styles/Updates.module.css';

export default function Updates() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);
  const [profiles, setProfiles] = useState([]);
  const donationGoal = 50000; // Example goal

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

  const roundedTotalDonations = parseFloat(totalDonations.toFixed(2));

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderContent = () => {
    switch (selectedOption) {
      case 'Jamaica Magis':
        return (
          <div className={styles.optionContent}>
            <img src="https://cdn.glitch.global/66782dbe-f19e-40ec-b994-c2e57503e9d8/1553101069690.jpg?v=1733015621600" alt="Jamaica Magis" className={styles.optionImage} />
            <div className={styles.optionDescription}>
              <p>Jamaica Magis allows Boston College students to live and serve in solidarity with people in Jamaica who have faced social, political, and economic oppression. Students gain a deeper understanding of social justice and spirituality by learning to recognize the face of God in all things.</p>
            </div>
          </div>
        );
      case 'Civil Rights Immersion':
        return (
          <div className={styles.optionContent}>
            <img src="https://cdn.glitch.global/66782dbe-f19e-40ec-b994-c2e57503e9d8/image.JPG?v=1733015885896" alt="Civil Rights Immersion" className={styles.optionImage} />
            <div className={styles.optionDescription}>
              <p>The Magis Civil Rights Immersion Trip is a six-day tour through the South with stops at major sites related to the civil rights movement. The trip coincides with BC’s spring break, and encourages students to gain a deeper understanding of historic events, and of their own place within the continued battle for racial equality in the United States.</p>
            </div>
          </div>
        );
      case 'Ghana Immersion':
        return (
          <div className={styles.optionContent}>
            <img src="https://cdn.glitch.global/66782dbe-f19e-40ec-b994-c2e57503e9d8/Screenshot%202024-11-30%20202222.png?v=1733016156779" alt="Ghana Immersion" className={styles.optionImage} />
            <div className={styles.optionDescription}>
              <p>Students will explore both rural and urban areas, gaining a holistic understanding of Ghana's cultural identity expressed through music, art, and other traditions. Students will reflect on Ghana's global impact by visiting historical sites and engaging in immersive cultural experiences. Highlights include visits to Koumasi, the Cape Coast Castle, Elmina Castle, and Accra's Independence Square, illuminating Ghana's journey and struggle towards independence from colonial rule, as well as the history of the postcolonial period. Students will visit both the urban and poorer sections of Accra, including the fishing village in Jamestown. Students will have an opportunity to participate in service work at a school for the blind and deaf in Winneba and with the Missionaries of Charity in Koumasi. </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.headingSection}>
          <h1 className={styles.heading}>Real-Time Updates</h1>
          <div ref={dropdownRef} className={styles.dropdown}>
            <div className={styles.dropdownButton} onClick={toggleDropdown}>
              Pick a Trip
              <span className={styles.dropdownIcon}>
                {isDropdownOpen ? '▲' : '▼'}
              </span>
            </div>
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <ul>
                  <li onClick={() => handleOptionClick('Jamaica Magis')}>Jamaica Magis</li>
                  <li onClick={() => handleOptionClick('Civil Rights Immersion')}>Civil Rights Immersion</li>
                  <li onClick={() => handleOptionClick('Ghana Immersion')}>Ghana Immersion</li>
                </ul>
              </div>
            )}
          </div>
          {renderContent()}
        </div>
        <div className={styles.leaderboardSection}>
          <Leaderboard profiles={profiles} />
        </div>
      </div>
      <div className={styles.progressBarSection}>
        <h2 className={styles.progressBarTitle}>Goal Tracker:</h2>
        {/* Circular Progress Bar */}
        <ProgressBar type="circular" donationAmount={roundedTotalDonations} goal={donationGoal} label="Current Tracker: 50k Goal" />
        <div className="progress-bars-container">
          {/* line Progress Bar */}
          <ProgressBar type="linear" donationAmount={roundedTotalDonations} goal={10000} label="10k Goal" />
          <ProgressBar type="linear" donationAmount={roundedTotalDonations} goal={30000} label="30k Goal" />
          <ProgressBar type="linear" donationAmount={roundedTotalDonations} goal={40000} label="40k Goal" />
        </div>
      </div>
    </div>
  );
}