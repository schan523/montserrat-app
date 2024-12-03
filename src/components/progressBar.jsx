import React from 'react';
import '../styles/progressBar.css';

const ProgressBar = ({ type, donationAmount = 0, goal = 1, label }) => {
    const progress = Math.min(100, goal > 0 ? (donationAmount / goal) * 100 : 0);

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
                    aria-valuenow={isComplete ? 100 : progress.toFixed(2)}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ '--progress': `${progress}%` }}
                >
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