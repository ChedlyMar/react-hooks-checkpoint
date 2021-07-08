import "./styles.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../../state";

const Filter = (props) => {
  const { filterMovie } = bindActionCreators(actionCreator, useDispatch());
  return (
    <div>
      <label className="filte-label">Filter: </label>
      <input
        className="filte-input"
        type="text"
        onChange={(e) => {
          filterMovie(e.target.value);
        }}
      />
    </div>
  );
};

export default Filter;
