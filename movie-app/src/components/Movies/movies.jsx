import styles from "./Movies.module.css";
import Movie from "../movie/movie";

function Movies({ movies, setMovies }) {
  function handleClick() {
    const movie = {
      id: "xyz",
      title: "Jigsaw Spiral",
      year: 2022,
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}> Latest Movie</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
