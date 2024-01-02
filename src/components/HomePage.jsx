import { useState, useEffect } from 'react';

function HomePage({ setActivePage }) {
  const [soundState, setSoundState] = useState('off');

  useEffect(() => {
    const audio = document.getElementById('audio');

    if (soundState === 'on') {
      audio.play();
    } else {
      audio.pause();
    }
  }, [soundState]);

  function handleSound() {
    soundState === 'off' ? setSoundState('on') : setSoundState('off');
  }

  return (
    <div className="home-container">
      {/* Main content section */}
      <main className="home-main">
        <button type="button" className="play-btn" onClick={setActivePage}>
          PLAY
        </button>
      </main>

      {/*Sound and Info Buttons */}
      <button
        type="button"
        className="home-buttons sound-btn"
        onClick={handleSound}
      >
        <div
          className={soundState === 'on' ? 'sound-on-icon' : 'sound-off-icon'}
        ></div>
      </button>
    </div>
  );
}

export default HomePage;
