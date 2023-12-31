import { useState } from 'react';

function HomePage({ setActivePage }) {
  const [soundState, setSoundState] = useState('off');

  function handleSound() {
    soundState === 'off' ? setSoundState('on') : setSoundState('off');
  }

  function handleInfo() {}
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
          className="sound-btn-icon"
          style={{
            backgroundImage: `url(${
              soundState === 'off'
                ? 'src/assets/img/sound-on.svg'
                : 'src/assets/img/sound-off.svg'
            })`,
          }}
        ></div>
      </button>
      <button
        type="button"
        className="home-buttons info-btn"
        onClick={handleInfo}
      >
        <div className="info-btn-icon"></div>
      </button>
    </div>
  );
}

export default HomePage;
