import { useState } from 'react';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';

function App() {
  const [activePage, setActivePage] = useState(0);

  if (activePage === 0) {
    return <HomePage setActivePage={() => setActivePage(1)} />;
  } else {
    return <GamePage setActivePage={() => setActivePage(0)} />;
  }
}

export default App;

fetch(
  'https://gateway.marvel.com:443/v1/public/characters?apikey=06a4a6f08841c6b08d6ec9ce409004fd',
  {
    mode: 'cors',
  },
)
  .then((response) => response.json())
  .then((data) => console.log(data));
