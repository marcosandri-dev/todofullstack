import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodoLists } from "../api/todoApi";
import { Todo } from "@shared/types";

const initialState: Todo[] = [];

// Is there a better method?
export const fetchData = createAsyncThunk(
  "todoList/todoLists",
  async (_, { dispatch }) => {
    const todoLists = await fetchTodoLists();
    dispatch(todosAdd(todoLists[0].todos));
    return todoLists;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todosAdd: (state, action: PayloadAction<Todo[]>) => {
      state.push(...action.payload);
    },
    todoAdd: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
  },
});

export const { todoAdd, todosAdd } = todosSlice.actions;
export default todosSlice.reducer;
