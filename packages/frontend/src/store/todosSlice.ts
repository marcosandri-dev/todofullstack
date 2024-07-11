import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteTodo,
  fetchTodoLists,
  postTodo,
  updateTodo,
} from "../api/todoApiService";
import { Todo, TodoUpdatePartial } from "@shared/types";

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
  async (todoID: string, { rejectWithValue }) => {
    try {
      const erasedTodo = await deleteTodo(todoID);

      return erasedTodo.id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editTodo = createAsyncThunk(
  "todos/updateTodo",
  async (todoBodyUpdate: TodoUpdatePartial, { rejectWithValue }) => {
    try {
      const editedTodo = await updateTodo(todoBodyUpdate);

      return editedTodo;
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
    builder.addCase(
      editTodo.fulfilled,
      (state, action: PayloadAction<Todo>) => {
        const index = state.findIndex((todo) => todo.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      }
    );
    builder.addCase(editTodo.rejected, (state, action) => {
      console.error(action.payload); // Manage error (toaster)
    });
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
