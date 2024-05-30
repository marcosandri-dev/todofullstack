import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './types';

const basicTodos: Todo[] = [{
  id: '1',
  message: "TEST 1",
  done: false,
},
{
  id: '2',
  message: "TEST 2",
  done: false,
}]

const initialState: Todo[] = basicTodos;

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdd: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
  }
});

export const { todoAdd } = todosSlice.actions;
export default todosSlice.reducer;