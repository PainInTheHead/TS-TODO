import { useState } from "react";
import { useDispatch } from "react-redux";
import { putTodo, allSelected } from "../store/todosSlice";

import "./Form.css";

const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(putTodo({ text: value }));
        setValue("");
      }}
    >
      <div className="input">
        <button
          type="button"
          onClick={() => {
            dispatch(allSelected());
          }}
          className="inputbtn"
        >
          <img src="./select.png"></img>
        </button>
        <input
          type="text"
          placeholder="add yours txt..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="inputbtn">
          <img src="./add.png"></img>
        </button>
      </div>
    </form>
  );
};

export default Form;
