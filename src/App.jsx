import { useState } from 'react';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import SoundButton from './components/SoundButton';
import InfoModal from './components/Info';

function App() {
  const [activePage, setActivePage] = useState(0);

  return (
    <>
      {activePage === 0 ? (
        <HomePage setActivePage={() => setActivePage(1)} />
      ) : (
        <GamePage setActivePage={() => setActivePage(0)} />
      )}
      {/*Sound and Info Buttons */}
      <SoundButton />
      <InfoModal />
      <audio
        src={import.meta.env.BASE_URL + 'src/assets/audio/theme-song.mp3'}
        type="audio/mp3"
        id="audio"
        loop
        controls
      ></audio>
    </>
  );
}

export default App;
