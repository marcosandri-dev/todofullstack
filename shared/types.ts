export interface Todo {
  id: string;
  todoListID: string;
  message: string;
  done: boolean;
  archived: boolean;
  dateCreation: Date;
}

export interface TodoList {
  id: string;
  todos: Todo[];
  name: string;
  dateCreation: Date;
}
