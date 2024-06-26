import { TodoList } from "@shared/types";

const apiUrl = "http://localhost:5000/todoList";

export const fetchTodoLists = async (): Promise<TodoList[]> => {
  // Check documentazione fetch
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};
