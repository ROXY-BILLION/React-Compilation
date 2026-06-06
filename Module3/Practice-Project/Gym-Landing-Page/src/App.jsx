import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProgramCard from "./components/ProgramCard";
import TrainerCard from "./components/TrainerCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="programs">
        <ProgramCard title="Weight Training" />
        <ProgramCard title="Cardio Fitness" />
        <ProgramCard title="Personal Coach" />
      </section>

      <section className="trainers">
        <TrainerCard
          image="https://images.unsplash.com/photo-1567013127542-490d757e51fc"
          name="Trainer 1"
        />

        <TrainerCard
          image="https://images.unsplash.com/photo-1550345332-09e3ac987658"
          name="Trainer 2"
        />

        <TrainerCard
          image="https://images.unsplash.com/photo-1549476464-37392f717541"
          name="Trainer 3"
        />
      </section>

      <Footer />
    </>
  );
}

export default App;