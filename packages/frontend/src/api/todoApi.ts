import { Todo, TodoList } from "@shared/types";

const apiUrl = "http://localhost:5000";

export const fetchTodoLists = async (): Promise<TodoList[]> => {
  // Check documentazione fetch
  const response = await fetch(`${apiUrl}/todoList`);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};

// This will be trasformed for the todoList, actually
export const postTodo = async (todoMessage: string): Promise<Todo> => {
  // add validation library
  const todo: Todo = {
    id: `${Math.random()}${new Date()}`,
    todoListID: "1",
    message: todoMessage,
    dateCreation: new Date(),
    done: false,
    archived: false,
  };

  const response = await fetch(`${apiUrl}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todo }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return response.json();
};
