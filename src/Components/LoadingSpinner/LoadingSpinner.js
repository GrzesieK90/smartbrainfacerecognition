import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <div className="loading-text">
                <p>Please wait!</p>
                <p>Logging in...</p>
                <p className="small-text">This can take a while...</p>
            </div>
        </div>
    );
}

export default LoadingSpinner;
