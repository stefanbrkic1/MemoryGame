function HomePage({ setActivePage }) {
  function playSound() {
    const buttonPlaySound = document.getElementById('buttonPlaySound');
    buttonPlaySound.play();
  }
  return (
    <div className="home-container">
      {/* Main content section */}
      <main className="home-main">
        <button
          type="button"
          className="play-btn"
          onClick={() => {
            playSound();
            setActivePage();
          }}
        >
          PLAY
        </button>
      </main>
    </div>
  );
}

export default HomePage;
