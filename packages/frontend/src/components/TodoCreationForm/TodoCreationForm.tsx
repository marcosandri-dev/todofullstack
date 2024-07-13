import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../../store/todosSlice";
import { AppDispatch } from "../../store/store";
import { TodoInputType } from "../../types";
import { Todo } from "@shared/types";

interface TodoCreationFormProps {
  todoInputOpen: TodoInputType;
  setTodoInputOpen?: (todoInputOpen: TodoInputType) => void;
  todo?: Todo;
}

const TodoCreationForm: React.FC<TodoCreationFormProps> = ({
  todoInputOpen,
  setTodoInputOpen,
  todo,
}) => {
  const [todoInputValue, setTodoInputValue] = useState<string>(
    todo?.message || ""
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Part of the validation. Create validation function?
    if (todoInputValue.trim()) {
      if (todoInputOpen === TodoInputType.CREATE) {
        dispatch(addTodo(todoInputValue));
        setTodoInputValue("");
      }
      if (todoInputOpen === TodoInputType.EDIT) {
        if (todo) {
          dispatch(editTodo({ id: todo.id, message: todoInputValue }));
          setTodoInputOpen?.(TodoInputType.NONE);
        }
      }
    }
  };

  return (
    <form className="flex w-full space-x-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="message"
        className="flex-auto py-2 pl-2"
        placeholder="New todo..."
        value={todoInputValue}
        onChange={(e) => setTodoInputValue(e.target.value)}
      />
      <button
        type="submit"
        className={`rounded bg-emerald-500 hover:bg-emerald-400 p-2 ${
          todoInputOpen === TodoInputType.CREATE ? "px-2.5" : "px-4"
        } text-white `}
      >
        {todoInputOpen === TodoInputType.CREATE ? "Create" : "Edit"}
      </button>
      {todoInputOpen === TodoInputType.EDIT && (
        <button
          type="button"
          className="rounded bg-blue-500 p-2 px-2.5 text-white hover:bg-blue-400"
          onClick={() => setTodoInputOpen?.(TodoInputType.NONE)}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default TodoCreationForm;
