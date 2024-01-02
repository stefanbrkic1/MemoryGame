import SoundButton from './SoundButton';
import InfoModal from './Info';

function HomePage({ setActivePage }) {
  return (
    <div className="home-container">
      {/* Main content section */}
      <main className="home-main">
        <button type="button" className="play-btn" onClick={setActivePage}>
          PLAY
        </button>
      </main>

      {/*Sound and Info Buttons */}
      <SoundButton />
      <InfoModal />
    </div>
  );
}

export default HomePage;
