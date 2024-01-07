import { useEffect } from 'react';

function GameOverModal({
  round,
  gameOverState,
  handleNextLevel,
  playClickSound,
  highestScore,
  handleTryAgain,
  level,
}) {
  useEffect(() => {
    if (gameOverState === 'LOST') {
      const gameOverSound = document.getElementById('gameOverSound');
      gameOverSound.play();
    } else if (gameOverState === 'WON') {
      const winSound = document.getElementById('winSound');
      winSound.play();
    }
  }, [gameOverState]);

  function stopWinSound() {
    const winSound = document.getElementById('winSound');
    winSound.pause();
    winSound.currentTime = 0;
  }

  return (
    <>
      <div
        className={`game-over-modal  ${
          gameOverState === 'LOST' ? 'modal-lost' : 'modal-won'
        }`}
      >
        <div className="game-over-text">YOU {`${gameOverState}`}</div>
        <div className="game-over-flex">
          <div className="game-over-state">
            <div className="level-modal-icon"></div>
            <div className="score-modal">{level - 1}</div>
          </div>
          <div className="game-over-state">
            <div className="score-modal-icon"></div>
            <div className="score-modal"> {round}</div>
          </div>
          <div className="game-over-state">
            <div className="score-modal">🎯 {highestScore}</div>
          </div>
        </div>
        <button
          type="button"
          className="play-again-btn"
          onClick={() => {
            playClickSound();
            stopWinSound();
            gameOverState === 'LOST' ? handleTryAgain() : handleNextLevel();
          }}
        >
          {gameOverState === 'LOST' ? 'TRY AGAIN' : 'NEXT LEVEL'}
        </button>
      </div>
      <div className="overlay"></div>
    </>
  );
}

export default GameOverModal;
