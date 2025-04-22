import styles from "./Movies.module.css";
import Movie from "../movie/movie";
import data from "../../utils/constans/data";
import { useState } from "react";

function Movies() {
  //const movies = data;
  const [movies, setMovies] = useState(data);

  function handleClick() {
    const movie = {
      id: "xyz",
      title: "Jigsaw Spiral",
      year: 2022,
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    //movie.push(movie);
    setMovies([...movies, movie]);
  } // Tambahkan penutup di sini

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}> Latest Movie</h2>
        <div className={styles.movie__container}>
          {/* <Movie/>
                    <Movie/> */}
          {movies.map((movie) => {
            // Ganti 'movie' dengan 'movies'
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
