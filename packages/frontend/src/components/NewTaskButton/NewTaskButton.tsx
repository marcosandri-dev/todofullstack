interface NewTaskButtonProps {
  setTodoInputOpen: (todoInputOpen: boolean) => void;
  todoInputOpen: boolean;
}

const NewTaskButton: React.FC<NewTaskButtonProps> = ({
  setTodoInputOpen,
  todoInputOpen,
}) => {
  return (
    <button
      type="button"
      className="bg-blue-500 text-white p-2 rounded -mt-2"
      onClick={() => setTodoInputOpen(!todoInputOpen)}
    >
      {todoInputOpen ? "Cancel New task" : "New task"}
    </button>
  );
};

export default NewTaskButton;
