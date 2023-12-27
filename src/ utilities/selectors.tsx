import { createSelector } from "@reduxjs/toolkit";
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

export const selectTodos = (state:  { todos: TodosState }) => state.todos.todos;
const selectTodosFilter = (state:  { todos: TodosState }) => state.todos.filter;

export const getFilteredTodos = createSelector(
  [selectTodos, selectTodosFilter],
  (todos: Todo[], filter: "all" | "active" | "completed") => {
    if (filter === "all") {
      return todos;
    } else if (filter === "active") {
      return todos.filter((todo) => !todo.done);
    } else {
      return todos.filter((todo) => todo.done);
    }
  }
);