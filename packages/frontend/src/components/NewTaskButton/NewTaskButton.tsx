import { TodoInputType } from "../../types";

interface NewTaskButtonProps {
  setTodoInputOpen: (todoInputOpen: TodoInputType) => void;
  todoInputOpen: TodoInputType;
}

const NewTaskButton: React.FC<NewTaskButtonProps> = ({
  setTodoInputOpen,
  todoInputOpen,
}) => {
  return (
    <button
      type="button"
      className="bg-blue-500 text-white p-2 rounded -mt-2 hover:bg-blue-400"
      onClick={() =>
        setTodoInputOpen(
          todoInputOpen !== TodoInputType.CREATE
            ? TodoInputType.CREATE
            : TodoInputType.NONE
        )
      }
    >
      {todoInputOpen === TodoInputType.CREATE ? "Cancel New task" : "New task"}
    </button>
  );
};

export default NewTaskButton;
