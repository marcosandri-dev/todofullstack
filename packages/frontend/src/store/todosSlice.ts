import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteTodo, fetchTodoLists, postTodo } from "../api/todoApiService";
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

export const eraseTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todoMessage: string, { rejectWithValue }) => {
    try {
      const erasedTodo = await deleteTodo(todoMessage);

      return erasedTodo.id;
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
      console.error(action.payload); // Manage error (toaster)
    });
    builder.addCase(
      eraseTodo.fulfilled,
      (state, action: PayloadAction<string>) => {
        return state.filter((todo) => todo.id !== action.payload);
      }
    );
    builder.addCase(eraseTodo.rejected, (state, action) => {
      console.error(action.payload); // Manage error (toaster)
    });
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
