import "./App.css";
import AthleteImg from './assets/Athlete.jpeg'

function App() {
  return (
    <div className="container">
      <div className="athlete-card">
        <img
          src={AthleteImg}
          alt="athlete"
          className="profile-img"
        />

        <h2>Michael Adams</h2>

        <p className="sport">Professional Sprinter</p>

        <div className="stats">
          <div>
            <h3>6</h3>
            <p>Gold Medals</p>
          </div>

          <div>
            <h3>24</h3>
            <p>Age</p>
          </div>

          <div>
            <h3>11s</h3>
            <p>Best Time</p>
          </div>
        </div>

        <button>Achievements</button>
      </div>
    </div>
  );
}

export default App;