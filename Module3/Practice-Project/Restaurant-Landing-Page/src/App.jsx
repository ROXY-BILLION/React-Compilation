import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FoodCard from "./components/FoodCard";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="food-section">
        <FoodCard
          image="https://images.unsplash.com/photo-1513104890138-7c749659a591"
          title="Pizza"
        />

        <FoodCard
          image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
          title="Burger"
        />

        <FoodCard
          image="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
          title="Pasta"
        />
      </section>

      <Reviews />
      <Footer />
    </>
  );
}

export default App;