import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import GameOverModal from './GameOverModal';

function PlayGround({
  setActivePage,
  characters,
  setCharacters,
  highestScore,
  setHighestScore,
  playClickSound,
}) {
  const [round, setRound] = useState(0);
  const [displayingCharacters, setDisplayingCharacters] = useState([]);
  const [gameOverState, setGameOverState] = useState('PLAYING');

  useEffect(() => {
    round > highestScore && setHighestScore((prevScore) => round);
  }, [gameOverState]);

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
    <>
      <div className="playground-top">
        {/*Home Button*/}
        <div
          className="home-btn"
          onClick={() => {
            playClickSound();
            setActivePage();
          }}
        >
          <div className="home-icon"></div>
        </div>

        {/*Scorebaoard */}

        <div className="scoreboard">
          <div className="current-score">
            <div className="score-icon"></div>
            <div className="score-text">
              SCORE: <span>{round}</span>
            </div>
          </div>
          <div className="highest-score">
            🎯 HIGHEST SCORE: <span>{highestScore}</span>
          </div>
        </div>
      </div>

      {/*CARDS */}
      <div className="playground-container">
        <main className="cards-container">
          {displayingCharacters.map((character) => {
            return (
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.6}
                glareColor="#ffffff"
                glarePosition="bottom"
                glareBorderRadius="20px"
              >
                <motion.div
                  key={`${character.id}-${round}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="card"
                  onClick={() => {
                    playClickSound();
                    handleCardClick(character.id);
                  }}
                >
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${character.image})` }}
                  ></div>
                  <div className="card-text">{character.name}</div>
                </motion.div>
              </Tilt>
            );
          })}
        </main>

        {/*GAME OVER MODAL */}
        {gameOverState !== 'PLAYING' && (
          <GameOverModal
            round={round}
            gameOverState={gameOverState}
            setActivePage={setActivePage}
            playClickSound={playClickSound}
          />
        )}
      </div>
    </>
  );
}

export default PlayGround;
