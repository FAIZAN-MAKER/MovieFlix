import React from 'react';
import "./loading.css";
 export const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        {/* Main Spinner */}
        <div className="spinner-wrapper">
          <div className="spinner-outer">
            <div className="spinner-inner">
              <div className="spinner-core"></div>
            </div>
          </div>

          {/* Pulsing dots around spinner */}
          <div className="orbit-dots">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            <div className="dot dot-4"></div>
          </div>
        </div>

        {/* Text with typing effect */}
        <div className="loading-text">
          <span className="loading-word">Loading</span>
          <span className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>

        {/* Progress bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      </div>

      {/* Background particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
};


