import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DestinationCard from "./components/DestinationCard";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="destinations">
        <h2>Top Destinations</h2>

        <div className="destination-grid">
          <DestinationCard
            image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
            city="Paris"
            country="France"
          />

          <DestinationCard
            image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
            city="Dubai"
            country="UAE"
          />

          <DestinationCard
            image="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
            city="London"
            country="United Kingdom"
          />
        </div>
      </section>

      <Tours />

      <Footer />
    </>
  );
}

export default App;