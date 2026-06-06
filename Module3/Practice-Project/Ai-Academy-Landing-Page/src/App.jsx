import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CourseCard from "./components/CourseCard";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="courses">
        <CourseCard
          title="Artificial Intelligence"
          description="Build AI tools, chatbots, automation systems and intelligent applications."
        />

        <CourseCard
          title="MERN Stack Development"
          description="Become a full-stack developer using MongoDB, Express, React and Node.js."
        />

        <CourseCard
          title="Cybersecurity"
          description="Learn ethical hacking, network security and penetration testing."
        />
      </section>

      <Features />

      <Footer />
    </>
  );
}

export default App;