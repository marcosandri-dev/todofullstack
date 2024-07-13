import { Todo } from "@shared/types";

interface TodoMessageProps {
  todo: Todo;
}

const TodoMessage: React.FC<TodoMessageProps> = ({ todo }) => {
  return (
    <span className={todo.done ? "line-through" : ""}>{todo.message}</span>
  );
};

export default TodoMessage;
