import React, { useState } from "react";

import Game from "./Components/Game";

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const randomizeArray = array => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const newArr = randomizeArray(arr);

const App = () => {
  const [positions, setpositions] = useState(newArr);
  const [moves, setmoves] = useState(0);

  const updatePositions = index => {
    let newPositions = positions;
    let newmoves = moves;
    const emptyIndex = newPositions.indexOf(0);
    const targetIndex = newPositions.indexOf(index);
    const dif = Math.abs(targetIndex - emptyIndex);
    if (dif === 1 || dif === 4) {
      ++newmoves;
      newPositions[emptyIndex] = index;
      newPositions[targetIndex] = 0;
      setmoves(newmoves);
      setpositions(newPositions);
      let win = positions.every(x => x === positions.indexOf(x) + 1 || x === 0);
      if (win) {
        alert("Congratulations you have won the game!!!");
      }
    }
  };

  const startNewGame = () => {
    // let newPositions = randomizeArray(positions);
    // setpositions(newPositions);
    // setmoves(0);
  };

  const pauseGame = () => {};

  // const startTimer = (duration = 3600) => {
  //   let timer = duration,
  //     minutes,
  //     seconds;
  //   counter = setInterval(function() {
  //     minutes = parseInt(timer / 60, 10);
  //     seconds = parseInt(timer % 60, 10);

  //     minutes = minutes < 10 ? "0" + minutes : minutes;
  //     seconds = seconds < 10 ? "0" + seconds : seconds;

  //     setmin(minutes);
  //     setsec(seconds);
  //     setstart(true);

  //     if (--timer < 0) {
  //       stopTimer();
  //     }
  //   }, 1000);
  //   startGame();
  // };

  return (
    <div className="app">
      <h1 className="heading">15 Puzzle</h1>
      <div className="content">
        <div className="buttons">
          <button className="btn new-game" onClick={startNewGame}>
            New Game
          </button>
          <button className="btn pause-game" onClick={pauseGame}>
            Pause Game
          </button>
        </div>
        <div className="stats">
          <p className="moves">
            Moves: <span>{moves}</span>
          </p>
          <p className="time">Time: 0s</p>
        </div>
      </div>
      <Game positions={positions} updatePositions={updatePositions} />
    </div>
  );
};

export default App;
