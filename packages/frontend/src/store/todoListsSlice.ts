import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodoLists } from "../api/todoApiService";
import { TodoList } from "@shared/types";

const initialState: TodoList[] = [];

export const getTodoLists = createAsyncThunk(
  "todoList/fetchTodoLists",
  async (_, { rejectWithValue }) => {
    try {
      const todoLists = await fetchTodoLists();

      return todoLists;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const todoListsSlice = createSlice({
  name: "todoLists",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      getTodoLists.fulfilled,
      (state, action: PayloadAction<TodoList[]>) => {
        state.push(...action.payload);
      }
    );
  },
});

export const {} = todoListsSlice.actions;
export default todoListsSlice.reducer;
