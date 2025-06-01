import { useState, useEffect } from "react";
//import styles from "./Hero.module.css";
import styled from "styled-components";
import { Heading, Paragraph } from "../UI/Button/typograpy.jsx"
import { Image } from "../UI/Button/media.jsx"
import Button from "../UI/Button/index.jsx"

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

  /* Medium Screen */
@media (min-width: 768px) {
  /*
   * Nothing TODO Here.
   * We dont change style Hero. 
   */
}

/* Large Screen */
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
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
      );
      const data = await response.json();
      setMovie(data);
    }
    fetchMovie();
  }, []);

  return (
    <StyledHero>
      <section className="hero">
        <div className="hero__left">
          <Heading size="2.44rem" color="#4361ee">
            {movie.Title}
          </Heading>
          <Heading as="h3" size="1.59rem" color="#b5179e">
            {movie.Genre}
          </Heading>
          <Paragraph color="#64748b">{movie.Plot}</Paragraph>
          <Button $variant="primary" size="md">
            Watch
          </Button>
        </div>
        <div className="hero__right">
          <Image src={movie.Poster} alt="poster" width="100%" rounded="25px" />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
