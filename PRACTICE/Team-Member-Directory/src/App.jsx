import './App.css';
import ProfileCard from './components/ProfileCard';
import Profile1 from './assets/Profile1.jpeg';
import Profile2 from './assets/Profile2.jpeg';
import Profile3 from './assets/Profile3.jpeg';
import Profile4 from './assets/Profile4.jpeg';
import Profile5 from './assets/Profile5.jpeg';


function App() {
 
  return (

    <div className="container">
      <h1>Our Team</h1>

      <div className="team-grid">
        <ProfileCard
          image={Profile1}
          name="John Smith"
          role="Frontend Developer"
          location="London, UK"
          github="https://github.com"
          linkedin="https://linkedin.com"
        />

        <ProfileCard
          image={Profile2}
          name="Sarah Jones"
          role="UI/UX Designer"
          location="Manchester, UK"
          github="https://github.com"
          linkedin="https://linkedin.com"
        />

        <ProfileCard
          image={Profile3}
          name="Michael Brown"
          role="Backend Developer"
          location="Birmingham, UK"
          github="https://github.com"
          linkedin="https://linkedin.com"
        />

        <ProfileCard
          image={Profile4}
          name="Emma Wilson"
          role="Project Manager"
          location="Liverpool, UK"
          github="https://github.com"
          linkedin="https://linkedin.com"
        />

        <ProfileCard
          image={Profile5}
          name="David Taylor"
          role="DevOps Engineer"
          location="Leeds, UK"
          github="https://github.com"
          linkedin="https://linkedin.com"
        />
      </div>
    </div>
  )
}

export default App
