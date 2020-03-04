import React, { useState } from "react";

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
      console.log(positions, moves, newmoves);
    }
  };

  return (
    <div className="game">
      {positions.map((i, index) => {
        const cellClass = i ? "cell" : "cell empty";
        return (
          <div
            className={cellClass}
            key={index}
            onClick={i !== 0 ? e => updatePositions(i) : null}
          >
            {i ? i : ""}
          </div>
        );
      })}
    </div>
  );
};

export default App;
