import React from "react";

const Game = ({ positions, updatePositions }) => {
  return (
    <div className="game">
      {positions.map((i, index) => {
        const cellClass = i
          ? i === index + 1 ? "cell correct-cell" : "cell"
          : "cell empty";
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

export default Game;
