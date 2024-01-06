import { useEffect } from 'react';

function GameOverModal({
  round,
  gameOverState,
  setActivePage,
  playClickSound,
}) {
  useEffect(() => {
    if (gameOverState === 'LOST') {
      const gameOverSound = document.getElementById('gameOverSound');
      gameOverSound.play();
    }
  }, [gameOverState]);
  return (
    <>
      <div className="game-over-modal">
        <div className="game-over-text">YOU {`${gameOverState}`}</div>
        <div className="game-over-state">SCORE: {round}</div>
        <button
          type="button"
          className="play-again-btn"
          onClick={() => {
            playClickSound();
            setActivePage(0);
          }}
        >
          PLAY AGAIN
        </button>
      </div>
      <div className="overlay"></div>
    </>
  );
}

export default GameOverModal;
