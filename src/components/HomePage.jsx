function HomePage({ setActivePage }) {
  return (
    <div className="home-container">
      {/* Main content section */}
      <main className="home-main">
        <button type="button" className="play-btn" onClick={setActivePage}>
          PLAY
        </button>
      </main>
    </div>
  );
}

export default HomePage;
