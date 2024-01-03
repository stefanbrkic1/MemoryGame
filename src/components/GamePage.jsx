import PlayGround from './PlayGround';

function GamePage({ setActivePage, characters }) {
  return (
    <>
      {/*Home Button*/}
      <div className="home-btn" onClick={setActivePage}>
        HOME PAGE
      </div>

      {/*PlayGround for cards*/}
      <PlayGround characters={characters} />
    </>
  );
}

export default GamePage;
