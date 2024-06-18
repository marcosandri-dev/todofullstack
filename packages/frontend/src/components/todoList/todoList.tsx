import TodoMessage from "../TodoMessage/todoMessage";
import { Todo } from '@shared/types';

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {

  return (
    <div>
      {todos?.length ? (
        todos.map((todo) => <TodoMessage key={todo.id}>{todo.message}</TodoMessage>)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default TodoList;