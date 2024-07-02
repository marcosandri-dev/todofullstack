interface NewTaskButtonProps {}

const NewTaskButton: React.FC<NewTaskButtonProps> = () => {
  return (
    <button type="button" className="bg-blue-500 text-white p-2 rounded -mt-2">
      New task
    </button>
  );
};

export default NewTaskButton;
