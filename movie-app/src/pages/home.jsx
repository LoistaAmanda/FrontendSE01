// import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/movies";
// import Footer from "../components/Footer/Footer";
import AddMovieForm from "../components/addMovie/AddMovie";
import data from "../utils/constans/data"
import { useState } from "react";


function Home() {

  const [movies, setMovies] = useState(data);
  return (
    <div>
      {/* <Navbar /> */}
      <main>
        <Hero />
        <Movies  movies={movies} setMovies={setMovies}/>
        <AddMovieForm movies={movies} setMovies={setMovies}/>
        {/* <Counter /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
