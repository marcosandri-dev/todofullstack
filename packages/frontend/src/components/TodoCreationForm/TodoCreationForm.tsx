import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todosSlice";
import { AppDispatch } from "../../store/store";

interface TodoCreationFormProps {}

const TodoCreationForm: React.FC<TodoCreationFormProps> = () => {
  const [todoInputValue, setTodoInputValue] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Part of the validation. Create validation function?
    if (todoInputValue.trim()) {
      dispatch(addTodo(todoInputValue));
      setTodoInputValue("");
    }
  };

  return (
    <li className="flex justify-between px-2 pb-4">
      <form className="flex w-full space-x-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="flex-auto py-2 pl-2"
          placeholder="New todo..."
          value={todoInputValue}
          onChange={(e) => setTodoInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-md bg-emerald-500 p-2 px-2.5 text-white hover:bg-emerald-400"
        >
          Create
        </button>
      </form>
    </li>
  );
};

export default TodoCreationForm;
