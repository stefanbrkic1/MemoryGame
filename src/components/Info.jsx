import { Fragment, useState } from 'react';

function InfoModal({ playClickSound }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Fragment>
      {/*Info Modal Button */}
      <button
        type="button"
        className="home-buttons info-btn"
        onClick={() => {
          playClickSound();
          setIsModalOpen(true);
        }}
      >
        <div className="info-btn-icon"></div>
      </button>

      {/*Info Modal*/}
      {isModalOpen && (
        <div className="info-modal">
          <div className="modal-top">
            <div className="info-heading">INFO | How to play?</div>
            <button
              type="button"
              className="close-modal-btn"
              onClick={() => {
                playClickSound();
                setIsModalOpen(false);
              }}
            ></button>
          </div>
          <div className="modal-body">
            <div className="how-to-container">
              <div className="how-to">1. You get a deck of shuffled cards.</div>
              <div className="how-to">
                2. Don't click on the same card twice to complete level!
              </div>
              <div className="how-to">
                3. Difficulty increases with each new level (6 new cards)
              </div>
            </div>
            <div className="info-para2">🏆 - Number of levels completed</div>
            <div className="info-para2">⭐ - Current Score</div>
            <div className="info-para2">🎯 - Highest Score Achieved</div>
            <div className="info-para">
              There are 🏆6 levels of difficulty, see how far you can get!
            </div>
          </div>
        </div>
      )}
      {isModalOpen && <div className="overlay"></div>}
    </Fragment>
  );
}

export default InfoModal;
