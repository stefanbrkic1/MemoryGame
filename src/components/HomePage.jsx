function HomePage({ setActivePage }) {
  return (
    <div className="home-container">
      {/* Header section */}
      <header className="header">wwww.memorygame.com</header>

      {/* Main content section */}
      <main className="home-main">
        <h1 className="heading-text">Memory Game</h1>

        <h2 className="heading-subtext">Memory Game Subtext For Design</h2>
        <button type="button" className="play-btn" onClick={setActivePage}>
          PLAY
        </button>
      </main>

      {/* Footer section */}
      <footer className="footer">
        <a href="https://github.com/stefanbrkic1" target="blank">
          @stefanbrkic1
        </a>
        <div className="github-logo"></div>
      </footer>
    </div>
  );
}

export default HomePage;
