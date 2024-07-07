import express, { Request, Response } from "express";
import cors from "cors";
import { Todo, TodoList } from "@shared/types";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Transform into local storage db
const todoLists: TodoList[] = [
  {
    id: "1",
    name: "basicTodoList",
    dateCreation: new Date("2024-01-01T00:00:00Z"),
    todos: [
      {
        id: "123",
        todoListID: "1",
        message: "TEST 1",
        dateCreation: new Date("2024-01-02T00:00:00Z"),
        done: false,
        archived: false,
      },
      {
        id: "432",
        todoListID: "1",
        message: "TEST 2",
        dateCreation: new Date("2024-01-03T00:00:00Z"),
        done: true,
        archived: false,
      },
    ],
  },
];

app.get("/todoList", (req: Request, res: Response) => {
  res.json(todoLists);
});

app.post("/todos", (req: Request, res: Response) => {
  const newTodo: Todo = req.body.todo;

  todoLists[0].todos.push(newTodo);

  res.status(201).json(newTodo);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
