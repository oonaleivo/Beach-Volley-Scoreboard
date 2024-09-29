import React, { useState } from 'react';

const InfoIcon = () => {
    const [infoVisible, setInfoVisible] = useState(false);

    const toggleInfo = () => {
        setInfoVisible(!infoVisible);
    };

    const InfoModal = () => (
        <div style={infoModalStyle}>
            <h3 style={{ color: 'black', textAlign: 'center' }}>Scoreboard Info</h3>

                <p style={{ color: 'black', lineHeight: '1.5' }}>
                    <strong>Enter Team Names:</strong><br />
                    Enter the names of the two teams in the given fields. 
                    After entering the team names, click the "Submit Team Names" button. <br /><br />

                    <strong>Add Points:</strong><br />
                    To add a point to a team, click on the large button displaying the team's current points. 
                    The points will automatically update, and the app will handle set points and game over 
                    conditions based on the selected mode.<br /><br />
                    
                    <strong>Remove Points:</strong><br />
                    If you need to remove a point, click the "Remove Point" button below the team's score. 
                    <br /><br />
                    
                    <strong>Switch Between Beach and Indoor Modes:</strong><br />
                    The app supports both beach and indoor volleyball scoring rules.
                    Click the "Switch to Indoor/Beach Mode" button to toggle between the two modes. 
                    The current mode will be displayed below the button.<br /><br />
                    
                    <strong>Reset Scores:</strong><br />
                    To reset the scores for both teams, click the "Reset Scores" button. 
                    This will set both teams' points back to zero.<br /><br />
                    
                    <strong>Reset Sets:</strong><br />
                    To reset the sets for both teams, click the "Reset Sets" button. 
                    This will set both teams' sets back to zero and clear the set results.<br /><br />
                    
                    <strong>Set Results:</strong><br />
                    The app keeps track of the results of each set. You can view the set results at the 
                    bottom of the screen, which shows the scores for each completed set.<br /><br />
                    
                    <strong>Game Over and Switch Sides Messages:</strong><br />
                    The app will display messages when the game is over or when it's time to switch sides. 
                    Click the "Ok" button to clear these messages.<br /><br />

                    <strong>Other important stuff:</strong><br />
                    Switching the mode will reset all points and sets, so be careful!.<br /><br />
                </p>

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
    fontSize: '2vw',  // Adjusts based on screen width
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '2vw',  // Adjusts based on screen width
    zIndex: 20,
    borderRadius: '5px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    maxHeight: '80vh',
    overflowY: 'auto',
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