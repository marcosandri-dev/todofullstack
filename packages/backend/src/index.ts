import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import { Todo, TodoList } from "@shared/types";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Transform into local storage db
// Divide Todolist and Todos to comply to REST architecture
const todoLists: TodoList[] = [
  {
    id: "1",
    name: "My first Todo List",
    dateCreation: new Date("2024-01-01T00:00:00Z"),
  },
];

const todos: Todo[] = [
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
];

app.get("/todoList", (req: Request, res: Response) => {
  res.json(todoLists);
});

// This will filter by the todoList.
app.get("/todos", (req: Request, res: Response) => {
  res.json(todos);
});

app.post("/todos", (req: Request, res: Response) => {
  const newTodo: Todo = { ...req.body.todo, id: uuidv4() };

  todos.push(newTodo);

  res.status(201).json(newTodo);
});

app.delete("/todos/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  // const todos = todoLists[0].todos;

  // Export function validation
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  //const deletedTodo = todoLists[0].todos.splice(todoIndex, 1);
  const deletedTodo = todos.splice(todoIndex, 1);

  res.status(200).json(deletedTodo[0]);
});

app.put("/todos/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const todoUpdates = req.body.todoBodyUpdate;
  // const todos = todoLists[0].todos;

  // Export function validation
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todos[todoIndex] = { ...todos[todoIndex], ...todoUpdates };

  const updatedTodo = todos[todoIndex];

  res.status(200).json(updatedTodo);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
