import React, { useState } from 'react';

const InfoIcon = () => {
    const [infoVisible, setInfoVisible] = useState(false);

    const toggleInfo = () => {
        setInfoVisible(!infoVisible);
    };

    const InfoModal = () => (
        <div style={infoModalStyle}>
            <h3 style={{color: 'black'}}>Scoreboard info</h3>
            <p style={{color: 'black'}}>
                Sets go to 21 points with 2 point difference, and possible
                third set to 15. The scoreboard will also alert to switch sides every 7 points and in the third set
                every 5 points. Team score sides can be manually switched. </p>
            <button style={buttonSmallStyle} onClick={toggleInfo}>Close</button>
        </div>
    );

    return (
        <div>
            <button onClick={toggleInfo} style={infoButtonStyle}>ℹ️</button>
            {infoVisible && <InfoModal />}
        </div>
    );
};

const infoButtonStyle = {
    color: 'red',
    cursor: 'pointer',
    fontSize: '4vw',
    background: 'none',
};

const infoModalStyle = {
    position: 'fixed',
    fontSize: '3vw',  // Adjusts based on screen width
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '2vw',  // Adjusts based on screen width
    zIndex: 20,
    borderRadius: '5px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
};

const buttonSmallStyle = {
    backgroundColor: 'white',
    fontSize: '3vw',  // Adjusts based on screen width
    padding: '1vw',  // Adjusts based on screen width
    cursor: 'pointer',
    margin: '2px',
    borderRadius: '5px',
};

export default InfoIcon;