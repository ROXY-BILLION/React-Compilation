import "./App.css";
import Book from './assets/download.png'

function App() {
  return (
    <div className="container">
      <div className="book-card">
        <img
          src={Book}
          alt="book"
        />

        <h2>Atomic Habits</h2>

        <p className="author">
          By James Clear
        </p>

        <p className="description">
          Tiny changes, remarkable results.
          Learn how habits shape your life.
        </p>

        <button>Read Summary</button>
      </div>
    </div>
  );
}

export default App;