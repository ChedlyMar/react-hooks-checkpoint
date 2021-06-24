import "./styles.css";
const Filter = (props) => {
  return (
    <div>
      <label className="filte-label">Filter: </label>
      <input className="filte-input" type="text" onChange={props.onChange} />
    </div>
  );
};

export default Filter;
