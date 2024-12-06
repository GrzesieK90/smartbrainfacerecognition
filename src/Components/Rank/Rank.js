import React from "react";
import './Rank.css'

const Rank = ({ name, stats }) => {
    return (
        <div>
            <div className="text text-title">
                {`${name}, your detection statistics:`}
            </div>
            <div className="stats-container">
                <div className="stat-item">
                    <span className="text text-label">Faces Detected</span>
                    <span className="text text-value">{stats.facesDetected || 0}</span>
                </div>
                <div className="stat-item">
                    <span className="text text-label">Images Analyzed</span>
                    <span className="text text-value">{stats.imagesProcessed || 0}</span>
                </div>
            </div>
        </div>
    )
} 

export default Rank;