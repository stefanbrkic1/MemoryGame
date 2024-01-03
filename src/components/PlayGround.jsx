import { useState, useEffect } from 'react';

function PlayGround({ characters, setCharacters }) {
  const [round, setRound] = useState(0);
  const [displayingCharacters, setDisplayingCharacters] = useState([]);
  const [gameOverState, setGameOverState] = useState('PLAYING');

  useEffect(() => {}, [gameOverState]);

  //Shuffle characters for each round
  useEffect(() => {
    let usedCharacters = [];
    let newDisplayingCharacters = [];

    // Find character that hasn't been clicked yet
    const notClickedCharacter = characters.find(
      (character) => character.isClicked === false,
    );

    if (notClickedCharacter === undefined) {
      // GAME OVER (WON)
      setGameOverState('WON');
      return;
    } else {
      usedCharacters.push(characters.indexOf(notClickedCharacter));
    }

    // Get random characters
    for (let i = 0; i < 5; i += 1) {
      let randomNum = Math.floor(Math.random() * characters.length);
      while (usedCharacters.includes(randomNum)) {
        randomNum = Math.floor(Math.random() * characters.length);
      }
      usedCharacters.push(randomNum);
      newDisplayingCharacters.push(characters[randomNum]);
    }

    // Push at least one character that hasn't been clicked to displaying characters
    let randomIndex = Math.floor(Math.random() * 6);
    newDisplayingCharacters.splice(randomIndex, 0, notClickedCharacter);
    setDisplayingCharacters([...newDisplayingCharacters]);
  }, [round]);

  // Set clicked characters isClicked to true and go to next round
  function handleCardClick(characterId) {
    const clickedCharacter = characters.find(
      (character) => character.id === characterId,
    );

    // GAME OVER (LOST)
    if (clickedCharacter.isClicked === true) {
      setGameOverState('LOST');
    }

    const modifiedCharacters = characters.map((character) => {
      if (character.id === characterId) {
        return { ...character, isClicked: true };
      } else {
        return character;
      }
    });

    setCharacters(modifiedCharacters);
    setRound((prevRound) => prevRound + 1);
  }

  return (
    <main className="cards-container">
      {displayingCharacters.map((character) => {
        return (
          <div
            className="card"
            key={character.id}
            onClick={(e) => handleCardClick(character.id)}
          >
            <div
              className="card-image"
              style={{ backgroundImage: `url(${character.image})` }}
            ></div>
            <div className="card-text">{character.name}</div>
          </div>
        );
      })}
      {gameOverState !== 'PLAYING' && (
        <>
          <div className="game-over-modal">
            <div className="game-over-text">GAME OVER</div>
            <div className="game-over-state">YOU {`${gameOverState}`}</div>
            <button type="button">PLAY AGAIN</button>
          </div>
          <div className="overlay"></div>
        </>
      )}
    </main>
  );
}

export default PlayGround;