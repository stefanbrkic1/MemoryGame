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
    </>
  );
}

export default App;
