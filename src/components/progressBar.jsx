import React from 'react';
import '../styles/progressBar.css';

const ProgressBar = ({ type, donationAmount = 0, goal = 1, label }) => {
    const progress = goal > 0 ? (donationAmount / goal) * 100 : 0;
    console.log(`Donation Amount: ${donationAmount}, Goal: ${goal}, Progress: ${progress.toFixed(2)}%`);

    const isComplete = progress >= 100;
    const progressBarStyle = {
        width: `${progress}%`,
        backgroundColor: isComplete ? '#76f7bf' : '#ccc', // Change color when complete
    };

    return (
        <div className="progress-bar-item">
            <h5>{label}</h5>
            {type === 'circular' ? (
                <div
                    className="progress-bar-container"
                    role="progressbar"
                    aria-valuenow={progress.toFixed(2)}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ '--progress': `${progress}%` }}
                >
                    {isComplete && <span>Completed</span>}
                </div>
            ) : (
                <div className="progress-bar-wrapper">
                    <div className="progress-bar" style={progressBarStyle}>
                        {isComplete ? 'Completed' : `${progress.toFixed(2)}%`}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProgressBar;