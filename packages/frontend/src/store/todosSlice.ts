import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodoLists, postTodo } from "../api/todoApi";
import { Todo } from "@shared/types";

const initialState: Todo[] = [];

// Is there a better method?
export const fetchData = createAsyncThunk(
  "todoList/fetchTodoLists",
  async (_, { rejectWithValue }) => {
    try {
      const todoLists = await fetchTodoLists();

      return todoLists[0].todos;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todoMessage: string, { rejectWithValue }) => {
    try {
      const newTodo = await postTodo(todoMessage);

      return newTodo;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      fetchData.fulfilled,
      (state, action: PayloadAction<Todo[]>) => {
        state.push(...action.payload);
      }
    );
    builder.addCase(addTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      console.error(action.payload); // Gestisci l'errore
    });
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
