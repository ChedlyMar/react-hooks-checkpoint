import { FC } from "react";
import "./styles.css";
import { useRef } from "react";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter: FC<Props> = ({ onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <label className="filte-label">Filter: </label>
      <input
        className="filte-input"
        type="text"
        ref={inputRef}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
