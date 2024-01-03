import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import SoundButton from './components/SoundButton';
import InfoModal from './components/Info';
import fetchData from './utils/api';

function App() {
  const [activePage, setActivePage] = useState(0);
  const [characters, setCharacters] = useState([]);

  // Fetch characters data from API
  useEffect(() => {
    fetchData()
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {activePage === 0 ? (
        <HomePage setActivePage={() => setActivePage(1)} />
      ) : (
        <GamePage
          setActivePage={() => setActivePage(0)}
          characters={characters}
        />
      )}
      <SoundButton />
      <InfoModal />
    </>
  );
}

export default App;
