import './App.css'
import ProfileImg from './assets/Profile.jpeg'

function App() {

  return (
    <>
      <div className="card">
        <img src={ProfileImg} alt="Profile img" />
        <div className="writeup">
          <h1>Okeke Divine Gift</h1>
          <p>Age:20</p>
          <p>Course: React</p>
          <p>Passinate Software Developer</p>
        </div>
        <div className="skills">
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
