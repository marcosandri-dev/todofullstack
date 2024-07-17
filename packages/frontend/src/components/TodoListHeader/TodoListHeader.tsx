interface TodoListHeaderProps {
  todoListTitle: string;
}

const TodoListHeader: React.FC<TodoListHeaderProps> = ({ todoListTitle }) => {
  return (
    <div className="grid grid-cols-12 border-b-2 p-4">
      <div className="col-span-8">
        <span>{todoListTitle}</span>
      </div>
      <div className="col-span-4"></div>
    </div>
  );
};

export default TodoListHeader;
