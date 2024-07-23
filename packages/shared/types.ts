export interface Todo {
  id: string;
  todoListID: string;
  message: string;
  done: boolean;
  archived: boolean;
  dateCreation: Date;
}

export type TodoUpdatePartial = Partial<
  Pick<Todo, "id" | "message" | "done" | "archived">
>;

export interface TodoList {
  id: string;
  name: string;
  dateCreation: Date;
}
