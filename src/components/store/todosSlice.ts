import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// export const fetchTodos = createAsyncThunk(
//   "todos/fetchTodos",
//   async function () {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");

//     const data = await response.json();

//     return data;
//   }
// );

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

const initialState: TodosState= {
  todos: [],
  filter: "all",
  status: null,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {

    putTodo(state: TodosState, action: PayloadAction <{ text: string }>) {
      if (!action.payload.text) {
        alert("nice try, budy");
      } else {
        state.todos.push({
          id: Date.now(),
          title: action.payload.text,
          done: false,
          isEdit: false,
        });
      }
    },

    toggleTodo(state: TodosState, action: PayloadAction <{ id: number }>) {
      const toggledtodo: Todo | undefined = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (toggledtodo) {
        toggledtodo.done = !toggledtodo.done;
      }
    },

    deleteTodo(state: TodosState, action: PayloadAction <{ id: number }>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    allSelected(state: TodosState) {
      const alltoggle = state.todos.filter((todo) => todo.done).length;
      if (state.todos.length === alltoggle) {
        state.todos = state.todos.map((todo) => {
          return { ...todo, done: false };
        });
      } else {
        state.todos = state.todos.map((todo) => {
          return { ...todo, done: true };
        });
      }
    },

    editTitleTodo(state: TodosState, action: PayloadAction <{ id: number, text: string }>) {
      const editTodo: Todo | undefined = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
     if (editTodo) {
       editTodo.title = action.payload.text;
     }
    },

    editorTodo(state: TodosState, action: PayloadAction <{ id: number }>) {
      const editTodo: Todo | undefined  = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (editTodo) {
        editTodo.isEdit = !editTodo.isEdit;
      }
    },

    clearHolder(state: TodosState) {
      state.todos = [];
    },

    clearComleted(state: TodosState) {
      state.todos = state.todos.filter((todo) => !todo.done);
    },

    openFiltered(state: TodosState, action: PayloadAction < "all" | "active" | "completed" >) {
      state.filter = action.payload;
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(fetchTodos.pending, (state: TodosState) => {
  //     state.status = "loading";
  //     state.error = null;
  //   });

  //   builder.addCase(fetchTodos.fulfilled, (state: TodosState, action) => {
  //     state.status = "resolved";
  //     state.todos = action.payload;
  //   });
  // },
});

export const {
  putTodo,
  toggleTodo,
  deleteTodo,
  allSelected,
  clearHolder,
  clearComleted,
  editTitleTodo,
  editorTodo,
  openFiltered,
} = todoSlice.actions;

export default todoSlice.reducer;
