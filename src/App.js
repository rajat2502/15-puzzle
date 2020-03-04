import React, { useState } from "react";

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const randomizeArray = arr => {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

const newArr = randomizeArray(arr);

const App = () => {
  const [positions, setpositions] = useState(newArr);

  const updatePositions = index => {
    let newPositions = positions;
    let emptyIndex = positions.indexOf(0);
    let targetIndex = positions.indexOf(index);
    const dif = Math.abs(targetIndex - emptyIndex);
    console.log(emptyIndex, targetIndex, dif);
    if (dif === 1 || dif === 4) {
      newPositions[emptyIndex] = index;
      newPositions[targetIndex] = 0;
      setpositions(newPositions);
      console.log(positions);
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
