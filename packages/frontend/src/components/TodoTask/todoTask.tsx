import { Todo } from "@shared/types";

interface TodoMessageProps {
  todo: Todo;
}

const TodoMessage: React.FC<TodoMessageProps> = ({ todo }) => {
  return <span>{todo.message}</span>;
};

export default TodoMessage;
