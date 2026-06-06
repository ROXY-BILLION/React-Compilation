import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="services">
        <ServiceCard title="Consulting" />
        <ServiceCard title="Marketing" />
        <ServiceCard title="Development" />
      </section>

      <About />
      <Footer />
    </>
  );
}

export default App;