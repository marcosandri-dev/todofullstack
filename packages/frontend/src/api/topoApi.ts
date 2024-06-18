import { Todo } from "@shared/types";

const apiUrl = "http://localhost:5000/todos";

export const fetchTodos = async (): Promise<Todo[]> => {
  // Check documentazione fetch
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};
