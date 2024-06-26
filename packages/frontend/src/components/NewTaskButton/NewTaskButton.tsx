interface NewTaskButtonProps {}

const NewTaskButton: React.FC<NewTaskButtonProps> = () => {
  return (
    <button type="button" className="bg-blue-500 text-white p-2 rounded">
      New task button
    </button>
  );
};

export default NewTaskButton;
