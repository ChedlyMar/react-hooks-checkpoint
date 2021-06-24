import "./styles.css";

const MovieCard = (props) => {
  const movie = props.movie;
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
