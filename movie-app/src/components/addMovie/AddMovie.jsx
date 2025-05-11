import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovie.module.css";

function AddMovieForm(props) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
  });

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);

  const { movies, setMovies } = props;

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "title") setIsTitleError(false);
    if (name === "date") setIsDateError(false);
  }

  function validate() {
    const { title, date } = formData;

    let valid = true;

    if (title === "") {
      setIsTitleError(true);
      valid = false;
    }
    if (date === "") {
      setIsDateError(true);
      valid = false;
    }

    return valid;
  }

  function addMovie() {
    const movie = {
      id: "xyz",
      title: formData.title,
      year: formData.date,
      type: "Movie",
      poster: "https://picsum.photos/200/300",
    };

    setMovies([...movies, movie]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      addMovie();
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input_form}
          id="title"
          type="text"
          value={formData.title}
          name="title"
          onChange={handleChange}
        />
        {isTitleError && <Alert>Title Wajib Diisi</Alert>}

        <input
          className={styles.input_form}
          id="date"
          type="text"
          value={formData.date}
          name="date"
          onChange={handleChange}
        />
        {isDateError && <Alert>Wajib Diisi</Alert>}

        <button className={styles.button_form}>Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovieForm;
