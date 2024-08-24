import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div style={styles.progressBar}>
      <div
        style={{ ...styles.progressBarFill, width: `${progress}%` }}
      />
    </div>
  );
};

const styles = {
  progressBar: {
    width: '100%',
    height: '20px',
    backgroundColor: '#e0e0df',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#007bff',
    transition: 'width 0.3s ease-in-out', 
  },
};

export default ProgressBar;
