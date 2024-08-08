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

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{margin: '5px', fontSize: '24px'}}>Enter Team Names</h2>
            <input
                type="text"
                placeholder="Team 1 Name"
                value={team1Name}
                onChange={(e) => setTeam1Name(e.target.value)}
                style={{ marginBottom: '5px', padding: '5px' }}
            />
            <input
                type="text"
                placeholder="Team 2 Name"
                value={team2Name}
                onChange={(e) => setTeam2Name(e.target.value)}
                style={{ marginBottom: '10px', padding: '5px' }}
            />
            <button style={buttonSmallStyle} onClick={handleSetNames}>Set Names</button>
        </div>
    );
};

const buttonSmallStyle = {
    backgroundColor: '#FFFFE0',
    fontSize: '13px',
    padding: '7px',
    cursor: 'pointer',
    margin: '2px',
    borderRadius: '5px',
};

export default TeamNameInput;
