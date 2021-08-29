import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "./todosSlice";

function CreateTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  function handleChange(e) {
    setText(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(todoAdded(text));
    setText("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>add todo</label>
          <input value={text} onChange={handleChange} type="text" />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateTodo;
