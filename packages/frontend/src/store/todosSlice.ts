import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodos } from "../api/topoApi";
import { Todo } from "@shared/types";

const initialState: Todo[] = [];

export const fetchData = createAsyncThunk(
  "todos/getTodos",
  async (_, { dispatch }) => {
    const todos = await fetchTodos();
    dispatch(todosAdd(todos));
    return todos;
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
