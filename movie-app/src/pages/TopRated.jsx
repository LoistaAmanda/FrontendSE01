import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero.jsx";
import Movies from "../components/Movies/Movies.jsx";

function TopRated() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getTopRatedMovies() {
      try {
        const response = await axios.get(URL);
        if (response.data && response.data.results) {
          setMovies(response.data.results);
        } else {
          console.error(
            "Data dari API tidak memiliki properti 'results':",
            response.data
          );
        }
      } catch (error) {
        console.error("Gagal mengambil data film top rated:", error);
      }
    }

    getTopRatedMovies();
  }, [URL]);

  return (
    <>
      <Hero />
      <Movies movies={movies} />
    </>
  );
}

export default TopRated;
