import PlayGround from './PlayGround';

function GamePage({ setActivePage }) {
  return (
    <>
      {/*Home Button*/}
      <div className="home-btn" onClick={setActivePage}>
        HOME PAGE
      </div>

      {/*PlayGround for cards*/}
      <PlayGround />
    </>
  );
}

export default GamePage;
