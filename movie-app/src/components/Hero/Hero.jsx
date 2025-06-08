import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios"; // Import axios
import { Heading, Paragraph } from "../UI/Button/typograpy.jsx";
import { Image } from "../UI/Button/media.jsx";
import Button from "../UI/Button/index.jsx";

const StyledHero = styled.div`
  margin: 1rem;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  div {
    margin-bottom: 1rem;
  }

  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  p {
    color: #64748b;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.8rem 2rem 0.5rem;
    border: none;
    border-radius: 10px;
    background-color: #4361ee;
    color: #fff;
    font-size: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: 3rem auto;
    }

    .hero {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    .hero__left {
      flex-basis: 40%;
    }

    .hero__right {
      flex-basis: 25%;
    }
  }
`;

function Hero() {
  const [movie, setMovie] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchTrendingMovies() {
      const response = await fetch(
        "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
      );
      const data = await response.json();
      return data;
    }

    async function fetchDetailMovies() {
      const trendingMovie = await fetchTrendingMovies();
      const id = trendingMovie.imdbID;

      const params = `?api_key=${API_KEY}&append_to_response=videos`;
      const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
      const response = await axios.get(URL);

      setMovie({ ...trendingMovie, ...response.data });
    }

    fetchDetailMovies();
  }, []);

  const genres =
    movie && movie.genres
      ? movie.genres.map((genre) => genre.name).join(", ")
      : "";

  const idTrailer =
    movie && movie.videos && movie.videos.results.length > 0
      ? movie.videos.results[0].key
      : "";

  return (
    <StyledHero>
      <section className="hero">
        <div className="hero__left">
          <Heading size="2.44rem" color="#4361ee">
            {movie.Title || movie.title}
          </Heading>
          <h3>{genres}</h3>
          <p>{movie.overview || movie.Plot}</p>
          {idTrailer && (
            <Button
              as="a"
              href={`https://www.youtube.com/watch?v=${idTrailer}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Movie
            </Button>
          )}
        </div>
        <div className="hero__right">
          {movie.Poster && (
            <Image
              src={movie.Poster}
              alt="poster"
              width="100%"
              $rounded="25px"
            />
          )}
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
