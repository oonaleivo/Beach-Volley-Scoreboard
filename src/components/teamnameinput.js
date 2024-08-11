import React, { useState } from 'react';

const TeamNameInput = ({ onSetTeamNames }) => {
    const [team1Name, setTeam1Name] = useState('');
    const [team2Name, setTeam2Name] = useState('');

    const handleSetNames = () => {
        if (team1Name.trim() && team2Name.trim()) {
            onSetTeamNames(team1Name, team2Name);
            setTeam1Name('');
            setTeam2Name('');
        }
    };

    const handleTeam1NameChange = (e) => {
        const name = e.target.value.slice(0, 15); // Limit to 15 characters
        setTeam1Name(name);
    };

    const handleTeam2NameChange = (e) => {
        const name = e.target.value.slice(0, 15); // Limit to 15 characters
        setTeam2Name(name);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ margin: '5px', fontSize: '24px' }}>Enter Team Names</h2>
            <input
                type="text"
                placeholder="Team 1 Name"
                value={team1Name}
                onChange={handleTeam1NameChange}
                style={{ marginBottom: '5px', padding: '5px' }}
            />
            <input
                type="text"
                placeholder="Team 2 Name"
                value={team2Name}
                onChange={handleTeam2NameChange}
                style={{ marginBottom: '10px', padding: '5px' }}
            />
            <button style={buttonSmallStyle} onClick={handleSetNames}>Submit Team Names</button>
        </div>
    );
};

const buttonSmallStyle = {
    backgroundColor: 'white',
    fontSize: '3vw',  // Adjusts based on screen width
    padding: '1vw',  // Adjusts based on screen width
    cursor: 'pointer',
    margin: '2px',
    borderRadius: '5px',
};

export default TeamNameInput;
