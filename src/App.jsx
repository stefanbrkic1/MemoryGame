import { useState } from 'react';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import InfoModal from './components/Info';

function App() {
  const [activePage, setActivePage] = useState(0);

  if (activePage === 0) {
    return (
      <>
        <HomePage setActivePage={() => setActivePage(1)} />
        <InfoModal />
      </>
    );
  } else {
    return <GamePage setActivePage={() => setActivePage(0)} />;
  }
}

export default App;
