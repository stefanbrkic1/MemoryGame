import PlayGround from './PlayGround';

function GamePage({ setActivePage, characters, setCharacters }) {
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
      />
    </>
  );
}

export default GamePage;
