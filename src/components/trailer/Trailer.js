import { useParams, Link } from "react-router-dom";
import "./styles.css";

const Trailer = (props) => {
  let { id } = useParams();
  let videoLink = props.movies.find((movie) => movie.id == id);
  return (
    <div className="trailer">
      <iframe title="trailer-video" src={videoLink.trailer}></iframe>
      <p>{videoLink.description}</p>
      <br />

      <Link to="./">
        <button>Back to Movies List</button>
      </Link>
    </div>
  );
};

export default Trailer;
