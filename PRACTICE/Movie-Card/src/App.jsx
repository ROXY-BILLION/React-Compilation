import './App.css';
import MovieCard from './components/MovieCard';
import Movie1 from './assets/Movie1.jpeg';
import Movie2 from './assets/Movie2.jpeg';
import Movie3 from './assets/Movie3.jpeg';
import Movie4 from './assets/Movie4.jpeg';
import Movie5 from './assets/Movie5.jpeg';
function App() {

  return (
    <div className="Movie">
      <MovieCard
        image={Movie1}
        title="Originals"
        category="Vampire"
        stars="⭐⭐⭐⭐⭐"
        date="2015"
      />
      <MovieCard
        image={Movie2}
        title="Merlin"
        category="Magic"
        stars="⭐⭐⭐⭐"
        date="2010"
      />
      <MovieCard
        image={Movie3}
        title="Mortal Kombat"
        category="Fiction"
        stars="⭐⭐⭐⭐⭐"
        date="2018"
      />
      <MovieCard
        image={Movie4}
        title="Swat"
        category="Action"
        stars="⭐⭐⭐⭐"
        date="2020"
      />
      <MovieCard
        image={Movie5}
        title="Grimm"
        category="Action"
        stars="⭐⭐⭐⭐"
        date="2022"
      />
    </div>
  )
}

export default App
