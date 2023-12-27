import "./Total.css";
import Counter from "../wrappers/Counter";
import { useSelector } from "react-redux";
import { selectTodos } from "../../ utilities/selectors";

const CounterTodos = () => {
  interface Todo {
    id: number,
    title: string,
    done: boolean
    isEdit: boolean
  }

  const todos = useSelector(selectTodos);
  const activedTodos = todos.filter((todo: Todo) => !todo.done).length;
  const completedTodos = todos.length - activedTodos;
  return <Counter active={activedTodos} complete={completedTodos} />;
};

export default CounterTodos;
