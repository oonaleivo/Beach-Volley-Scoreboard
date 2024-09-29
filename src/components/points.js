import React, { useState, useEffect } from 'react';

const ScoreBoard = ({ team1Name, team2Name }) => {
    const [team1Points, setTeam1Points] = useState(0);
    const [team2Points, setTeam2Points] = useState(0);
    const [team1Sets, setTeam1Sets] = useState(0);
    const [team2Sets, setTeam2Sets] = useState(0);
    const [message, setMessage] = useState('');
    const [setResults, setSetResults] = useState([]);
    const [isSwitched, setIsSwitched] = useState(false);
    const [mode, setMode] = useState('beach'); // beach or indoor

    const handleAddPoint = (team) => {
        if (team === 'team1') {
            setTeam1Points(prevPoints => {
                const newPoints = prevPoints + 1;
                if (mode === 'beach') {
                    console.log('in beach');
                    if (newPoints >= 21 && newPoints - team2Points >= 2) {
                        handleAddSetPoint('team1', newPoints, team2Points);
                        return 0;
                    } else if (team1Sets === 1 && team2Sets === 1) {
                        if (newPoints >= 15 && newPoints - team2Points >= 2) {
                            handleAddSetPoint('team1', newPoints, team2Points);
                            return 0;
                        }
                    }

                }

                else if (mode === 'indoor') {
                    console.log('in indoor');
                    if (newPoints >= 25 && newPoints - team2Points >= 2) {
                        handleAddSetPoint('team1', newPoints, team2Points);
                        return 0;
                    } else if (team1Sets === 2 && team2Sets === 2) {
                        if (newPoints >= 15 && newPoints - team2Points >= 2) {
                            handleAddSetPoint('team1', newPoints, team2Points);
                            return 0;
                        }
                    }
                }
                return newPoints;
            });

        } else if (team === 'team2') {
            setTeam2Points(prevPoints => {
                const newPoints = prevPoints + 1;
                if (mode === 'beach') {
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
                } else if (mode === 'indoor') {
                    if (newPoints >= 25 && newPoints - team1Points >= 2) {
                        handleAddSetPoint('team2', team1Points, newPoints); // Corrected here
                        return 0;
                    } else if (team1Sets === 2 && team2Sets === 2) {
                        if (newPoints >= 15 && newPoints - team1Points >= 2) {
                            handleAddSetPoint('team2', team1Points, newPoints); // Corrected here
                            return 0;
                        }
                    }
                }

                return newPoints;
            });
        }
    };

    const handleToggleMode = () => {
        setMode(prevMode => prevMode === 'beach' ? 'indoor' : 'beach');
        handleResetScores();
        handleResetSets();
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

    const handleManualSwitch = () => {
        setIsSwitched(prevState => !prevState);
    };

    useEffect(() => {
        if (mode === 'beach' && (team1Sets === 2 || team2Sets === 2)) {
            showMessage('Game Over! Please reset the points and sets.');
        }
        else if (mode === 'indoor' && (team1Sets === 3 || team2Sets === 3)) {
            showMessage('Game Over! Please reset the points and sets.');
        }
    }, [team1Sets, team2Sets, mode]);

    useEffect(() => {
        if (mode === 'beach') {
            if (team1Sets === 1 && team2Sets === 1) {
                if ((team1Points + team2Points) % 5 === 0 && team1Points + team2Points !== 0 && team1Points + team2Points !== 0) {
                    showMessage('Switch sides!');
                    setIsSwitched(prevState => !prevState);
                }
            }
            else if ((team1Points + team2Points) % 7 === 0 && team1Points + team2Points !== 0) {
                showMessage('Switch sides!');
                setIsSwitched(prevState => !prevState);
            }
        }
    }, [team1Points, team2Points]);

    return (
        <div style={containerStyle}>
            {message && (
                <div style={messageBoxStyle}>
                    <div>{message}</div>
                    <button style={buttonSmallStyle} onClick={clearMessage}>Ok</button>
                </div>
            )}
            <button onClick={handleToggleMode} style={buttonSmallStyle}>
                Switch to {mode === 'beach' ? 'Indoor' : 'Beach'} Mode
            </button>
            <div style={{ margin: '5px', fontSize: '25px', backgroundColor: 'yellow' }}>
                Current Mode: {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </div>
            <div style={scoreBoardStyle}>
                {isSwitched ? (
                    <>
                        <TeamBox
                            teamName={team2Name}
                            teamPoints={team2Points}
                            teamSets={team2Sets}
                            handleAddPoint={() => handleAddPoint('team2')}
                            handleRemovePoint={() => handleRemovePoint('team2')}
                            buttonStyle={button2Style}
                        />
                        <TeamBox
                            teamName={team1Name}
                            teamPoints={team1Points}
                            teamSets={team1Sets}
                            handleAddPoint={() => handleAddPoint('team1')}
                            handleRemovePoint={() => handleRemovePoint('team1')}
                            buttonStyle={button1Style}
                        />
                    </>
                ) : (
                    <>
                        <TeamBox
                            teamName={team1Name}
                            teamPoints={team1Points}
                            teamSets={team1Sets}
                            handleAddPoint={() => handleAddPoint('team1')}
                            handleRemovePoint={() => handleRemovePoint('team1')}
                            buttonStyle={button1Style}
                        />
                        <TeamBox
                            teamName={team2Name}
                            teamPoints={team2Points}
                            teamSets={team2Sets}
                            handleAddPoint={() => handleAddPoint('team2')}
                            handleRemovePoint={() => handleRemovePoint('team2')}
                            buttonStyle={button2Style}
                        />
                    </>
                )}

            </div>

            <div>
                <button style={buttonSmallStyle} onClick={handleManualSwitch}>Switch Score Sides</button>
                <button style={buttonSmallStyle} onClick={handleResetScores}>Reset Scores</button>
                <button style={buttonSmallStyle} onClick={handleResetSets}>Reset Sets</button>
            </div>

            <h2 style={{ margin: '5px' }}>Set Results</h2>
            <ul style={setResultListStyle}>
                {setResults.map((result, index) => (
                    <li key={index}>Set {index + 1}: {result.team1} - {result.team2}</li>
                ))}
            </ul>
        </div>
    );
};

const TeamBox = ({ teamName, teamPoints, teamSets, handleAddPoint, handleRemovePoint, buttonStyle }) => (
    <div style={{ margin: '0 10px' }}>
        <h3 style={{ margin: '5px' }}>{teamName}</h3>
        <button style={buttonStyle} onClick={handleAddPoint}><div style={numberStyle}>{teamPoints}</div></button>
        <button style={buttonSmallStyle} onClick={handleRemovePoint}>Remove Point</button>
        <div style={setStyle}>{teamSets}</div>
    </div>
);


// Styles
const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    maxWidth: '600px',
    margin: '0 auto'
};

const messageBoxStyle = {
    position: 'fixed',
    fontSize: '4vw',  // Adjusts based on screen width
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'maroon',
    padding: '15vw',  // Adjusts based on screen width
    zIndex: 100,
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
};

const scoreBoardStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',  // Full width for flexibility
    margin: '0 auto',
};

const teamNameStyle = {
    margin: '5px',
    fontSize: '4vw',  // Adjusts based on screen width
    textAlign: 'center',
};

const setStyle = {
    fontSize: '10vw',  // Adjusts based on screen width
    textAlign: 'center',
};

const setResultListStyle = {
    alignItems: 'center',
    padding: '5px',
    margin: '0px',
    fontSize: '4vw',  // Adjusts based on screen width
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
    backgroundColor: pastelColors.blue,
    color: 'white',
    width: '43vw', // Adjusts based on screen width
    padding: '15px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    border: '2px solid black',
};

const button2Style = {
    backgroundColor: pastelColors.pink,
    color: 'white',
    width: '43vw', // Adjusts based on screen width
    padding: '15px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    border: '2px solid black',
};

const buttonSmallStyle = {
    backgroundColor: 'white',
    fontSize: '3vw',  // Adjusts based on screen width
    padding: '1vw',  // Adjusts based on screen width
    cursor: 'pointer',
    margin: '7px',
    borderRadius: '5px',
};

const numberStyle = {
    color: 'black',
    fontSize: '30vw',  // Adjusts based on screen width
};

export default ScoreBoard;
