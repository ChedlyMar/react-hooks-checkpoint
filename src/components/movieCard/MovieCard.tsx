import "./styles.css";
import { Movie } from "../../models/movie";
import { FC } from "react";

interface Props {
  movie: Movie;
}

const MovieCard: FC<Props> = ({ movie }) => {
  return (
    <div className="container">
      <div className="img">
        <img src={movie.posterURL} alt="" />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
      </div>
      <div className="rating">
        <h2>{movie.rating}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
