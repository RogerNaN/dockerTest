import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [scoreRed, setScoreRed] = useState(0);
  const [scoreBlue, setScoreBlue] = useState(0);
  const handleScoreChange = (color, newScore) => {
    if (color === 'red') {
      setScoreRed(newScore);
    } else if (color === 'blue') {
      setScoreBlue(newScore);
    }
  };
 
  const winMessageStyle={
    color: "white",
    backgroundColor: "gray"
  }
 
  let winner = null;
  if (scoreRed >= 11) {
    winner = '紅隊';
  } else if (scoreBlue >= 11) {
    winner = '藍隊';
  }
  return (
    <div className='App'>
      <h1>計分板</h1>
      <Score color="red" onScoreChange={handleScoreChange}></Score>
      <Score color="blue" onScoreChange={handleScoreChange}></Score>
      {winner && <h3 style={winMessageStyle}>{winner}獲勝!</h3>}
    </div>
 

  );
}

function Score({color, onScoreChange}){
  const [score, setScore] = useState(0);

  const addScore = () => {
    setScore(score + 1);
    onScoreChange(color, score + 1);
  };
 
  const boardStyle = {
    fontSize: "50px",
    color: "white",
    backgroundColor: color,
    width: "150px",
    height: "150px",
    border: "none",
    margin: "15px"
  };
  return (
    <button style={boardStyle} onClick={addScore}>
      {score}
    </button>
  )
}
export default App;
