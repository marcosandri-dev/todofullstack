import { Todo } from "@shared/types";

interface TodoMessageProps {
  todo: Todo;
}

const TodoMessage: React.FC<TodoMessageProps> = ({ todo }) => {
  return (
    <div>
      {todo.message}
      <div>Icon Edit</div>
      <div>Icon Delete</div>
    </div>
  );
};

export default TodoMessage;
