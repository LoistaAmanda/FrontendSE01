import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTopRatedMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

      try {
        const response = await fetch(URL);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Failed to fetch top rated movies:", error);
      }
    }

    fetchTopRatedMovies();
  }, []);

  return (
    <div>
      <Hero />
      <Movies movies={movies} />
    </div>
  );
}

export default TopRated;
