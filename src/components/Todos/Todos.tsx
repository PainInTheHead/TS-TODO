import "./Todos.css";
import Todo from "./Todo/Todo";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getFilteredTodos } from "../../ utilities/selectors";


const Todos: React.FC = () => {
  interface Todo {
    id: number,
    title: string,
    done: boolean
    isEdit: boolean
  }
  
  interface TodosState {
    todos: Todo[]
    filter: "all" | "active" | "completed"
    status: null | 'loading' | 'resolved'
    error: null
  }



  const filteredTodos: Todo[] = useSelector(getFilteredTodos);
  return (
    <ul className="todos">
      {filteredTodos.map((todo) => {
        return (
          <Todo todo={todo}/>
        );
      })}
    </ul>
  );
};

export default Todos;

