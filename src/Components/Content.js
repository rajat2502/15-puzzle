import React from "react";

const Content = ({ moves, sec, paused, startNewGame, pauseGame }) => {
  return (
    <div className="content">
      <div className="buttons">
        <button
          className="btn new-game"
          onClick={startNewGame}
          disabled={moves && !paused ? false : true}
        >
          New Game
        </button>
        <button
          className="btn pause-game"
          onClick={pauseGame}
          disabled={moves && !paused ? false : true}
        >
          Pause Game
        </button>
      </div>
      <div className="stats">
        <p className="moves">
          Moves: <span>{moves}</span>
        </p>
        <p className="time">
          Time: {sec}s
        </p>
      </div>
    </div>
  );
};

export default Content;
