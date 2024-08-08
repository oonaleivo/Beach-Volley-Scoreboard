import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/timer';
import ScoreBoard from './components/points';
import TeamNameInput from './components/teamnameinput';
import InfoIcon from './components/infoicon'; 

function App() {
  const [team1Name, setTeam1Name] = useState('Team 1');
  const [team2Name, setTeam2Name] = useState('Team 2');

  const handleSetTeamNames = (name1, name2) => {
    setTeam1Name(name1);
    setTeam2Name(name2);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{margin: '10px'}}>Beach Volley Scoreboard</h1>
        <InfoIcon />
        <TeamNameInput onSetTeamNames={handleSetTeamNames} />
        <Timer />
        <ScoreBoard team1Name={team1Name} team2Name={team2Name} />
      </header>
    </div >
  );
}

export default App;
