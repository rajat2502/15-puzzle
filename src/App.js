import React, { useState } from "react";

import Game from "./Components/Game";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let counter,
  pauseCounter = 0;

// randomize array
const randomizeArray = array => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

// randomized array
const newArr = randomizeArray(arr);

const App = () => {
  // React states
  const [positions, setpositions] = useState(newArr);
  const [moves, setmoves] = useState(0);
  const [sec, setsec] = useState(0);
  const [paused, setpaused] = useState(0);
  const [pausedTime, setpausedTime] = useState(0);

  // update position on moves
  const updatePositions = index => {
    console.log(paused);
    let newPositions = positions;
    let newmoves = moves;
    const emptyIndex = newPositions.indexOf(0);
    const targetIndex = newPositions.indexOf(index);
    const dif = Math.abs(targetIndex - emptyIndex);
    if ((dif === 1 || dif === 4) && !paused) {
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
    let newSec = sec;
    counter = setInterval(() => {
      if (!pauseCounter) {
        setsec(++newSec);
      }
    }, 1000);
  };

  // start a new game
  const startNewGame = () => {
    window.location.reload();
  };

  // play/pause game
  const pauseGame = () => {
    const newPaused = paused ? 0 : 1;
    setpaused(newPaused);
    if (!paused) {
      pauseCounter = 1;
    } else {
      pauseCounter = 0;
    }
  };

  return (
    <div className="app">
      <h1 className="heading">15 Puzzle</h1>
      <Content
        sec={sec}
        moves={moves}
        paused={paused}
        startNewGame={startNewGame}
        pauseGame={pauseGame}
      />
      <Game
        paused={paused}
        pauseGame={pauseGame}
        positions={positions}
        updatePositions={updatePositions}
      />
      <Footer />
    </div>
  );
};

export default App;
