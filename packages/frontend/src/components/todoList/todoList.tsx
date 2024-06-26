import TodoListHeader from "../TodoListHeader/TodoListHeader";
import TodoListTasks from "../TodoListTasks/TodoListTasks";

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  return (
    <div className="container mx-auto">
      <TodoListHeader />
      <TodoListTasks />
    </div>
  );
};

export default TodoList;
