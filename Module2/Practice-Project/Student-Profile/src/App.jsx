import "./App.css";
import ProfileImg from './assets/profile.jpeg';

function App() {
  return (
    <div className="container">
      <div className="card">
        <img
          src={ProfileImg}
          alt="student"
          className="profile-img"
        />

        <h2>David Wilson</h2>
        <p className="role">Frontend Development Student</p>

        <div className="info">
          <p>📍 London, UK</p>
          <p>🎓 Year 2 Student</p>
          <p>💻 React Enthusiast</p>
        </div>

        <button>View Profile</button>
      </div>
    </div>
  );
}

export default App;