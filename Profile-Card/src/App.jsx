import ProfileCard from "./components/ProfileCard";
import "./App.css";
import ProfileImage from "./assets/Profile.jpeg";

function App() {
  return (
    <ProfileCard
      image={ProfileImage}
      name="Divine Gift"
      bio="Frontend Developer and AI Enthusiast"
      github="https://github.com"
      linkedin="https://linkedin.com"
      twitter="https://twitter.com"
    />
  );
}

export default App;