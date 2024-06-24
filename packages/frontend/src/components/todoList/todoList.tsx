import TodoListHeader from "../TodoListHeader/TodoListHeader";
import TodoListTasks from "../TodoListTasks/TodoListTasks";

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  return (
    <div>
      <TodoListHeader />
      <TodoListTasks />
    </div>
  );
};

export default TodoList;
