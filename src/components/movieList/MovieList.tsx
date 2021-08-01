import "./styles.css";
import MovieCard from "../movieCard/MovieCard";
import { Movie } from "../../models/movie";
import { FC } from "react";

interface Props {
  movies: Movie[];
}

const MovieList: FC<Props> = ({ movies }) => {
  return (
    <div className="movie-list-container">
      <h2 className="title">Movie List:</h2>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
