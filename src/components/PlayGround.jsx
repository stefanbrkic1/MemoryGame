import { useState } from 'react';

function PlayGround({ characters }) {
  const [round, setRound] = useState(0);

  return (
    <main className="cards-container">
      {/* <div className="card">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${character.image})` }}
        ></div>
        <div className="card-text">{character.name}</div>
      </div> */}
    </main>
  );
}

export default PlayGround;
