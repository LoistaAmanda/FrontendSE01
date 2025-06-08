// src/pages/NowPlayingMovie.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function NowPlayingMovie() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchNowPlaying() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
        );
        setMovies(response.data.results);
        setLoading(false);
      } catch (err) {
        setError("Gagal mengambil data Now Playing");
        setLoading(false);
      }
    }

    fetchNowPlaying();
  }, []);

  if (loading) return <p>Loading now playing movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h2>Now Playing Movies</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ width: "200px" }}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%" }}
            />
            <h4>{movie.title}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default NowPlayingMovie;
