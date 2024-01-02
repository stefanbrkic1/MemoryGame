import { useState, useEffect } from 'react';

function SoundButton() {
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
    <>
      <button
        type="button"
        className="home-buttons sound-btn"
        onClick={handleSound}
      >
        <div
          className={soundState === 'on' ? 'sound-on-icon' : 'sound-off-icon'}
        ></div>
      </button>

      {/*Audio*/}
      <audio src="../src/assets/audio/theme-song.mp3" id="audio" loop></audio>
    </>
  );
}

export default SoundButton;