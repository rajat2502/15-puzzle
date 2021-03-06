import React from "react";

const Game = ({ paused, pauseGame, positions, updatePositions }) => {
  return (
    <div className={paused ? "game paused-game" : "game"}>
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
      {paused
        ? <div className="paused-state" onClick={pauseGame}>
            <svg
              height="80"
              width="80"
              viewBox="0 0 512 512"
              style={{ cursor: "pointer" }}
            >
              <path
                fill="#FFFFFF"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              />
            </svg>
          </div>
        : null}
    </div>
  );
};

export default Game;
