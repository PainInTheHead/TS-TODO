import { useEffect } from "react";
import "./App.css";
import Form from "./Form/Form";
import CounterTodos from "./CounterTodos/CounterTodos";
import Todos from "./Todos/Todos";
import Buttons from "./Buttons/Buttons";
import { useDispatch, useSelector } from "react-redux";
// import { fetchTodos } from "./store/todosSlice";
import React from "react";
import { selectTodos } from "../ utilities/selectors";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchTodos());
  // }, [dispatch]);
  const todos = useSelector(selectTodos);

  return (
    <div className="container">
      <h1 className="title">Todos</h1>
      <Form />
      <CounterTodos />
      {todos.length !== 0 && <Buttons />}
      <Todos />
    </div>
  );
}

export default App;
