import { useDispatch } from "react-redux";
import {
  toggleTodo,
  deleteTodo,
  editTitleTodo,
  editorTodo,
} from "../../store/todosSlice";
interface Todo {
  id: number,
  title: string,
  done: boolean
  isEdit: boolean
}

const Todo: React.FC<{todo: Todo}> = ({todo}) => {
  
  const dispatch = useDispatch();

  const goToggle = () => {
    dispatch(toggleTodo({ id: todo.id }));
  };

  const goDelete = (e: any) => {
    e.stopPropagation();
    dispatch(deleteTodo({ id: todo.id }));
  };

  const handleEdit = () => {
    dispatch(editorTodo({ id: todo.id }));
    if (todo.done) {
      dispatch(editorTodo({ id: todo.id }));
    }
  };

  const handleInputChange = (e: any) => {
    dispatch(editTitleTodo({ id:  todo.id, text: e.target.value }));
  };

  const handleWrapperDoubleClick = (e: any) => {
    if (e.target.classList.contains("accept")) {
      e.stopPropagation();
    }
  };

  const editTextTodo = () => {
    dispatch(editorTodo({ id: todo.id }));
  };

  return (
    <li
      onDoubleClick={handleEdit}
      className={`todo ${
        todo.done ? "done" : todo.isEdit ? "edit" : ""
      }`}
      key={todo.id}
    >
      <div className="todo-wrapper" onDoubleClick={handleWrapperDoubleClick}>
        <img
          src={todo.done ? "./accetp.png" : "./noaccept.png"}
          alt="accept"
          className="accept"
          onClick={goToggle}
        ></img>
        {todo.isEdit ? (
          <input
            className="input-new-todo"
            type="text"
            value={todo.title}
            onChange={handleInputChange}
            onBlur={editTextTodo}
          />
        ) : (
          <span>{todo.title}</span>
        )}
      </div>
      <img
        src="./deletebut.png"
        alt="delete"
        className="delete"
        onClick={goDelete}
      ></img>
    </li>
  );
};

export default Todo;
