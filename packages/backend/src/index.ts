import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
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
        id: uuidv4(),
        todoListID: "1",
        message: "TEST 1",
        dateCreation: new Date("2024-01-02T00:00:00Z"),
        done: false,
        archived: false,
      },
      {
        id: uuidv4(),
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
  const newTodo: Todo = { ...req.body.todo, id: uuidv4() };

  todoLists[0].todos.push(newTodo);

  res.status(201).json(newTodo);
});

app.delete("/todos/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const todoIndex = todoLists[0].todos.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const deletedTodo = todoLists[0].todos.splice(todoIndex, 1);

  res.status(200).json(deletedTodo[0]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
