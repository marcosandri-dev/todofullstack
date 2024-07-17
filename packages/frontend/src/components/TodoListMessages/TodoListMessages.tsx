import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useState } from "react";
import { editTodo, eraseTodo } from "../../store/todosSlice";
import TodoMessage from "../TodoMessage/todoMessage";
import EditIcon from "../Common/EditIcon";
import DeleteIcon from "../Common/DeleteIcon";
import TodoCreationForm from "../TodoCreationForm/TodoCreationForm";
import { TodoInputType } from "../../types";
import { Todo } from "@shared/types";

interface TodoListMessagesProps {
  todoInputOpen: TodoInputType;
  setTodoInputOpen: (todoInputOpen: TodoInputType) => void;
  todos: Todo[];
}

// This component has gotten chaotic. Create a better structure and use Redux for loading while fetching.
const TodoListMessages: React.FC<TodoListMessagesProps> = ({
  todoInputOpen,
  setTodoInputOpen,
  todos,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const [editKey, setEditKey] = useState<string>("");

  const deleteTodo = (e: React.MouseEvent, todoID: string) => {
    e.stopPropagation();
    dispatch(eraseTodo(todoID));
  };

  const openEdit = (e: React.MouseEvent, todoID: string) => {
    e.stopPropagation();
    setEditKey(todoID);
    setTodoInputOpen(TodoInputType.EDIT);
  };

  return (
    <ul className="divide-y divide-gray-100">
      {todos?.length !== 0 ? (
        todos.map((todo) =>
          todoInputOpen === TodoInputType.EDIT && editKey === todo.id ? (
            <li className="flex justify-between p-2" key={todo.id}>
              <TodoCreationForm
                setTodoInputOpen={setTodoInputOpen}
                todoInputOpen={todoInputOpen}
                todo={todo}
              />
            </li>
          ) : (
            <li
              className="flex justify-between p-2 cursor-pointer hover:bg-slate-200"
              key={todo.id}
              onClick={() =>
                dispatch(editTodo({ id: todo.id, done: !todo.done }))
              }
            >
              <TodoMessage todo={todo} />
              <div className="flex space-x-2">
                {!todo.done ? (
                  <button
                    onClick={(e) => openEdit(e, todo.id)}
                    className="text-white bg-blue-500 hover:bg-blue-400 p-0.5 rounded"
                  >
                    <EditIcon />
                  </button>
                ) : (
                  <button
                    onClick={(e) => deleteTodo(e, todo.id)}
                    className="text-white bg-red-500 hover:bg-red-400 p-0.5 rounded"
                  >
                    <DeleteIcon />
                  </button>
                )}
              </div>
            </li>
          )
        )
      ) : (
        <div className="p-2">
          <span>Add a new todo!</span>
        </div>
      )}
      {todoInputOpen === TodoInputType.CREATE && (
        <li className="flex justify-between p-2 pb-4">
          <TodoCreationForm todoInputOpen={todoInputOpen} />
        </li>
      )}
    </ul>
  );
};

export default TodoListMessages;
