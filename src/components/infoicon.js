import React, { useState } from 'react';

const InfoIcon = () => {
    const [infoVisible, setInfoVisible] = useState(false);

    const toggleInfo = () => {
        setInfoVisible(!infoVisible);
    };

    const InfoModal = () => (
        <div style={infoModalStyle}>
            <h2 style={{color: 'black'}}>Scoreboard info</h2>
            <p style={{color: 'black'}}>
                This is a scoreboard for beach volley games. Sets go to 21 points with 2 point difference, and possible
                third set is to 15. The scoreboard will also alert to switch sides every 7 points.</p>
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
    color: 'white',
    cursor: 'pointer',
    fontSize: '40px',
    background: 'none',
    border: '2px solid white',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
};

const infoModalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    backgroundColor: 'white',
    transform: 'translate(-50%, -50%)',
    padding: '10px',
    zIndex: 100,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    width: '400px',
};

const buttonSmallStyle = {
    backgroundColor: '#FFFFE0',
    fontSize: '13px',
    padding: '7px',
    cursor: 'pointer',
    margin: '2px',
    borderRadius: '5px',
};

export default InfoIcon;