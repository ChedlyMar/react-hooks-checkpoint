import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../../state/index";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterUrl] = useState("");
  const [rating, setRating] = useState("");

  const { addMovie } = bindActionCreators(actionCreator, useDispatch());

  return (
    <div className="new-movie">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMovie({ title, description, posterURL, rating });
        }}
      >
        <div className="input-group">
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Description: </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Rating: </label>
          <input
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Image: </label>
          <input
            type="text"
            value={posterURL}
            onChange={(e) => setPosterUrl(e.target.value)}
          />
        </div>

        <button className="add-movie" type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
