import React, { useState, useEffect } from 'react';

const ScoreBoard = ({ team1Name, team2Name }) => {
    const [team1Points, setTeam1Points] = useState(0);
    const [team2Points, setTeam2Points] = useState(0);
    const [team1Sets, setTeam1Sets] = useState(0);
    const [team2Sets, setTeam2Sets] = useState(0);
    const [message, setMessage] = useState('');
    const [setResults, setSetResults] = useState([]);

    const handleAddPoint = (team) => {
        if (team === 'team1') {
            setTeam1Points(prevPoints => {
                const newPoints = prevPoints + 1;
                if (newPoints >= 21 && newPoints - team2Points >= 2) {
                    handleAddSetPoint('team1', newPoints, team2Points);
                    return 0;
                }
                else if (team1Sets === 1 && team2Sets === 1) {
                    if (newPoints >= 15 && newPoints - team2Points >= 2) {
                        handleAddSetPoint('team1', newPoints, team2Points);
                        return 0;
                    }
                }
                return newPoints;
            });
        } else if (team === 'team2') {
            setTeam2Points(prevPoints => {
                const newPoints = prevPoints + 1;
                if (newPoints >= 21 && newPoints - team1Points >= 2) {
                    handleAddSetPoint('team2', team1Points, newPoints);
                    return 0;
                }
                else if (team1Sets === 1 && team2Sets === 1) {
                    if (newPoints >= 15 && newPoints - team1Points >= 2) {
                        handleAddSetPoint('team2', team1Points, newPoints);
                        return 0;
                    }
                }
                return newPoints;
            });
        }
    };

    const handleRemovePoint = (team) => {
        if (team === 'team1') {
            setTeam1Points(prevPoints => Math.max(prevPoints - 1, 0));
        } else if (team === 'team2') {
            setTeam2Points(prevPoints => Math.max(prevPoints - 1, 0));
        }
    }

    const handleAddSetPoint = (team, team1Score, team2Score) => {
        if (team === 'team1') {
            setTeam1Sets(prevSets => prevSets + 1);
            setSetResults(prevResults => [...prevResults, { team1: team1Score, team2: team2Score }]);
            handleResetScores();
        } else if (team === 'team2') {
            setTeam2Sets(prevSets => prevSets + 1);
            setSetResults(prevResults => [...prevResults, { team1: team1Score, team2: team2Score }]);
            handleResetScores();
        }
    };


    const handleResetScores = () => {
        setTeam1Points(0);
        setTeam2Points(0);
    };

    const handleResetSets = () => {
        setTeam1Sets(0);
        setTeam2Sets(0);
        setSetResults([]);
    };


    const showMessage = (msg) => {
        setMessage(msg);
    };

    const clearMessage = () => {
        setMessage('');
    };

    useEffect(() => {
        if (team1Sets === 2 || team2Sets === 2) {
            showMessage('Game Over! Please reset the points and sets.');
        }
    }, [team1Sets, team2Sets]);

    useEffect(() => {
        if (team1Sets === 1 && team2Sets === 1) {
            if ((team1Points + team2Points) % 5 === 0 && team1Points + team2Points !== 0 && team1Points + team2Points !== 0) { 
            showMessage('Switch sides!');
        }}
        else if ((team1Points + team2Points) % 7 === 0 && team1Points + team2Points !== 0) {
            showMessage('Switch sides!');
        }
    }, [team1Points, team2Points]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {
                message && (
                    <div style={{
                        position: 'fixed', fontSize: '40px', top: '35%', left: '50%', transform: 'translate(-50%, -50%)',
                        backgroundColor: 'red', padding: '70px', zIndex: 100, paddingLeft: '100px', paddingRight: '100px'
                    }}>
                        <div>{message}</div>
                        <button style={buttonSmallStyle} onClick={clearMessage}>Ok</button>
                    </div>
                )
            }

            <div style={{ display: 'flex', justifyContent: 'center', width: '400px', margin: '0 auto' }}>
                <div style={{ marginRight: '2px' }}>
                    <h3 style={{ margin: '5px' }}>{team1Name}</h3>
                    <button style={button1Style} onClick={() => handleAddPoint('team1')}><div style={numberStyle}>{team1Points}</div></button>
                    <button style={buttonSmallStyle} onClick={() => handleRemovePoint('team1')}>Remove Point</button>
                    <div style={{ fontSize: '66px', textAlign: 'center' }}>{team1Sets}</div>
                </div>
                <div style={{ marginLeft: '2px' }}>
                    <h3 style={{ margin: '5px' }}>{team2Name}</h3>
                    <button style={button2Style} onClick={() => handleAddPoint('team2')}><div style={numberStyle}>{team2Points}</div></button>
                    <button style={buttonSmallStyle} onClick={() => handleRemovePoint('team2')}>Remove Point</button>
                    <div style={{ fontSize: '66px', textAlign: 'center' }}>{team2Sets}</div>
                </div>
            </div>
            <div>
                <button style={buttonSmallStyle} onClick={handleResetScores}>Reset Scores</button>
                <button style={buttonSmallStyle} onClick={handleResetSets}>Reset Sets</button>
            </div>
            <h2 style={{ margin: '5px' }}>Set Results</h2>
            <ul style={{ alignItems: 'center', padding: '5px', margin: '0px' }}>
                {setResults.map((result, index) => (
                    <li key={index}>Set {index + 1}: {result.team1} - {result.team2}</li>
                ))}
            </ul>
        </div>
    );
};


const pastelColors = {
    pink: '#FFC0CB',
    purple: '#D8BFD8',
    blue: '#ADD8E6',
    green: '#98FB98',
    yellow: '#FFFFE0',
    orange: '#FFDAB9'
};

const button1Style = {
    backgroundColor: pastelColors.green,
    color: 'white',
    width: '250px',
    padding: '15px',
    border: 'none',
    borderRight: '2px solid #000',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
};

const button2Style = {
    backgroundColor: pastelColors.pink,
    color: 'white',
    width: '250px',
    padding: '15px',
    border: 'none',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
};

const buttonSmallStyle = {
    backgroundColor: '#FFFFE0',
    fontSize: '13px',
    padding: '7px',
    cursor: 'pointer',
    margin: '2px',
    borderRadius: '5px',
};

const numberStyle = {
    color: 'black',
    fontSize: '130px',
    border: '2px solid #000',
};

export default ScoreBoard;
