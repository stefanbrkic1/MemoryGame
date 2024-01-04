import PlayGround from './PlayGround';

function GamePage({
  setActivePage,
  characters,
  setCharacters,
  highestScore,
  setHighestScore,
}) {
  return (
    <>
      {/*Home Button*/}
      <div className="home-btn" onClick={setActivePage}>
        HOME PAGE
      </div>

      {/*PlayGround for cards*/}
      <PlayGround
        setActivePage={setActivePage}
        characters={characters}
        setCharacters={setCharacters}
        highestScore={highestScore}
        setHighestScore={setHighestScore}
      />
    </>
  );
}

export default GamePage;
