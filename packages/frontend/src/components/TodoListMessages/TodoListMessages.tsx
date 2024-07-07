import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect, useRef } from "react";
import { fetchData } from "../../store/todosSlice";
import TodoMessage from "../TodoMessage/todoMessage";
import EditIcon from "../Common/EditIcon";
import DeleteIcon from "../Common/DeleteIcon";
import TodoCreationForm from "../TodoCreationForm/TodoCreationForm";

interface TodoListMessagesProps {
  todoInputOpen: boolean;
}

const TodoListMessages: React.FC<TodoListMessagesProps> = ({
  todoInputOpen,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos);
  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (!hasFetchedData.current && !todos.length) {
      dispatch(fetchData());
      hasFetchedData.current = true;
    }
  }, [dispatch, todos]);

  return hasFetchedData.current ? (
    <ul className="divide-y divide-gray-100">
      {todos.map((todo) => (
        <li className="flex justify-between p-2" key={todo.id}>
          <TodoMessage todo={todo}></TodoMessage>
          <div className="flex space-x-2">
            <button className="text-white bg-blue-500 p-0.5 rounded">
              <EditIcon />
            </button>
            <button className="text-white bg-red-500 p-0.5 rounded">
              <DeleteIcon />
            </button>
          </div>
        </li>
      ))}
      {todoInputOpen && <TodoCreationForm />}
    </ul>
  ) : (
    <div>Loading...</div>
  );
};

export default TodoListMessages;
