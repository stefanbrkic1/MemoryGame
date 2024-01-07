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
  const [level, setLevel] = useState(1);
  const [round, setRound] = useState(0);
  const [displayingCharacters, setDisplayingCharacters] = useState([]);
  const [gameOverState, setGameOverState] = useState('PLAYING');
  const [charactersByLevel, setCharactersByLevel] = useState(
    characters.slice(0, 6),
  );

  useEffect(() => {
    if (level === 2) {
      setCharactersByLevel(characters.slice(0, 11));
    }
    if (level === 3) {
      setCharactersByLevel(characters.slice(0, 17));
    }
    if (level === 4) {
      setCharactersByLevel(characters.slice(0, 23));
    }
    if (level === 5) {
      setCharactersByLevel(characters.slice(0, 29));
    }
    if (level === 6) {
      setCharactersByLevel(characters.slice(0, 34));
    }
  }, [characters, level]);

  useEffect(() => {
    round > highestScore && setHighestScore((prevScore) => round);
  }, [gameOverState]);

  //Shuffle characters for each round
  useEffect(() => {
    let usedCharacters = [];
    let newDisplayingCharacters = [];

    // Find character that hasn't been clicked yet
    const notClickedCharacter = charactersByLevel.find(
      (character) => character.isClicked === false,
    );

    if (notClickedCharacter === undefined) {
      // GAME OVER (WON)
      setGameOverState('WON');
      return;
    } else {
      usedCharacters.push(charactersByLevel.indexOf(notClickedCharacter));
    }

    // Get random characters
    for (let i = 0; i < 5; i += 1) {
      let randomNum = Math.floor(Math.random() * charactersByLevel.length);
      while (usedCharacters.includes(randomNum)) {
        randomNum = Math.floor(Math.random() * charactersByLevel.length);
      }
      usedCharacters.push(randomNum);
      newDisplayingCharacters.push(charactersByLevel[randomNum]);
    }

    // Push at least one character that hasn't been clicked to displaying characters
    let randomIndex = Math.floor(Math.random() * 6);
    newDisplayingCharacters.splice(randomIndex, 0, notClickedCharacter);
    setDisplayingCharacters([...newDisplayingCharacters]);
  }, [charactersByLevel]);

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

    const modifiedCharactersByLevel = charactersByLevel.map((character) => {
      if (character.id === characterId) {
        return { ...character, isClicked: true };
      } else {
        return character;
      }
    });

    setCharacters(modifiedCharacters);
    setCharactersByLevel(modifiedCharactersByLevel);
    setRound((prevRound) => prevRound + 1);
  }

  function handleNextLevel() {
    setGameOverState('PLAYING');
    setRound(0);
    setLevel((prevLevel) => prevLevel + 1);
    setCharacters(
      characters.map((character) => {
        return { ...character, isClicked: false };
      }),
    );
  }

  function handleTryAgain() {
    setGameOverState('PLAYING');
    setCharacters(
      characters.map((character) => {
        return { ...character, isClicked: false };
      }),
    );
    // Reset score to starting level value
    setRound(0);
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
            <div className="level-icon"></div>
            <div className="score-text">{level - 1}</div>
          </div>
          <div className="current-score">
            <div className="score-icon"></div>
            <div className="score-text">{round}</div>
          </div>
          <div className="highest-score">
            🎯 <span>{highestScore}</span>
          </div>
        </div>
      </div>

      {/*CARDS */}
      <div className="playground-container">
        <main className="cards-container">
          {displayingCharacters.map((character) => {
            return (
              <Tilt
                key={`${character.id}-${round}`}
                glareEnable={true}
                glareMaxOpacity={0.6}
                glareColor="#ffffff"
                glarePosition="bottom"
                glareBorderRadius="15px"
              >
                <motion.div
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
            handleNextLevel={handleNextLevel}
            setActivePage={setActivePage}
            playClickSound={playClickSound}
            highestScore={highestScore}
            setLevel={setLevel}
            handleTryAgain={handleTryAgain}
            level={level}
          />
        )}
      </div>
    </>
  );
}

export default PlayGround;
