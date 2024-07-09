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
  // add validation library + Todo send type
  const todo: Todo = {
    id: "0",
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
    throw new Error("Failed to add todo");
  }

  return response.json();
};

export const deleteTodo = async (todoID: string): Promise<Todo> => {
  const response = await fetch(`${apiUrl}/todos/${todoID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }

  return response.json();
};
