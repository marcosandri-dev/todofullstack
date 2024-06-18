import express, { Request, Response } from "express";
import cors from "cors";
import { Todo } from "@shared/types";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Transform into local storage db
const todos: Todo[] = [
  {
    id: "1",
    message: "TEST 1",
    done: false,
  },
  {
    id: "2",
    message: "TEST 2",
    done: false,
  },
];

app.get("/todos", (req: Request, res: Response) => {
  res.json(todos);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
