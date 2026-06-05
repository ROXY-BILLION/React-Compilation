import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="album-card">
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500"
          alt="album"
        />

        <h2>Midnight Dreams</h2>

        <p className="artist">
          The Waves
        </p>

        <div className="album-info">
          <p>🎵 12 Tracks</p>
          <p>📅 Released 2025</p>
          <p>⭐ 4.9 Rating</p>
        </div>

        <button>Play Album</button>
      </div>
    </div>
  );
}

export default App;