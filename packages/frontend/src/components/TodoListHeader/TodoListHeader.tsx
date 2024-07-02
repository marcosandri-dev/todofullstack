interface TodoListHeaderProps {}

const TodoListHeader: React.FC<TodoListHeaderProps> = () => {
  return (
    <div className="grid grid-cols-12 border-b-2 p-4">
      <div className="col-span-4">DATA</div>
      <div className="col-span-8">Todo list title?</div>
    </div>
  );
};

export default TodoListHeader;
