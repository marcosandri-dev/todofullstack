import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";
import todoListsReducer from "./todoListsSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    todoLists: todoListsReducer,
    // Add filters?
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
