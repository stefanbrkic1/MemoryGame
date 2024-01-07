import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import PlayGround from './components/PlayGround';
import SoundButton from './components/SoundButton';
import InfoModal from './components/Info';
import fetchData from './utils/api';

function App() {
  const [activePage, setActivePage] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [highestScore, setHighestScore] = useState(0);

  // Fetch characters data from API
  useEffect(() => {
    fetchData()
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => console.error(error));
  }, [activePage]);

  function playClickSound() {
    const buttonClickSound = document.getElementById('buttonClickSound');
    buttonClickSound.play();
  }

  return (
    <>
      {activePage === 0 ? (
        <HomePage setActivePage={() => setActivePage(1)} />
      ) : (
        <PlayGround
          setActivePage={() => setActivePage(0)}
          characters={characters}
          setCharacters={setCharacters}
          highestScore={highestScore}
          setHighestScore={setHighestScore}
          playClickSound={playClickSound}
        />
      )}
      <div className="footer-buttons">
        <SoundButton playClickSound={playClickSound} />
        <InfoModal playClickSound={playClickSound} />
      </div>
    </>
  );
}

export default App;
