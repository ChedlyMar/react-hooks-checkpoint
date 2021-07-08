import "./styles.css";
import MovieCard from "../movieCard/MovieCard";
import { useSelector } from "react-redux";

const MovieList = () => {
  const movieList = useSelector((state) => state.movie);

  return (
    <div className="movie-list-container">
      <h2 className="title">Movie List:</h2>
      {movieList.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
