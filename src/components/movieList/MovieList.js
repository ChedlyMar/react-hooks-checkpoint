import "./styles.css";
import MovieCard from "../movieCard/MovieCard";

const MovieList = (props) => {
  return (
    <div className="movie-list-container">
      <h2 className="title">Movie List:</h2>
      {props.movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
