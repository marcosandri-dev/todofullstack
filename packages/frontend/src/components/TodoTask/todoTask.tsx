import { Todo } from "@shared/types";
import EditIcon from "../Common/EditIcon";
import DeleteIcon from "../Common/DeleteIcon";

interface TodoMessageProps {
  todo: Todo;
}

const TodoMessage: React.FC<TodoMessageProps> = ({ todo }) => {
  return (
    <div className="flex">
      <div>
        <span>{todo.message}</span>
      </div>

      <EditIcon className="ml-2" />
      <DeleteIcon className="ml-2" />
    </div>
  );
};

export default TodoMessage;
