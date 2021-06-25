import "./styles.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const movie = props.movie;
  return (
    <Link to={`/${movie.id}`}>
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
    </Link>
  );
};

export default MovieCard;
