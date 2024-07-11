import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect, useRef, useState } from "react";
import { eraseTodo, fetchData } from "../../store/todosSlice";
import TodoMessage from "../TodoMessage/todoMessage";
import EditIcon from "../Common/EditIcon";
import DeleteIcon from "../Common/DeleteIcon";
import TodoCreationForm from "../TodoCreationForm/TodoCreationForm";
import { TodoInputType } from "../../types";

interface TodoListMessagesProps {
  todoInputOpen: TodoInputType;
  setTodoInputOpen: (todoInputOpen: TodoInputType) => void;
}

const TodoListMessages: React.FC<TodoListMessagesProps> = ({
  todoInputOpen,
  setTodoInputOpen,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos);
  const hasFetchedData = useRef(false);

  const [editKey, setEditKey] = useState<string>("");

  useEffect(() => {
    if (!hasFetchedData.current && !todos.length) {
      dispatch(fetchData());
      hasFetchedData.current = true;
    }
  }, [dispatch, todos]);

  const deleteTodo = (todoID: string) => {
    dispatch(eraseTodo(todoID));
  };

  const openEdit = (todoID: string) => {
    setEditKey(todoID);
    setTodoInputOpen(TodoInputType.EDIT);
  };

  return hasFetchedData.current ? (
    <ul className="divide-y divide-gray-100">
      {todos.map((todo) =>
        todoInputOpen === TodoInputType.EDIT && editKey === todo.id ? (
          <li className="flex justify-between px-2" key={todo.id}>
            <TodoCreationForm
              setTodoInputOpen={setTodoInputOpen}
              todoInputOpen={todoInputOpen}
              todo={todo}
            />
          </li>
        ) : (
          <li className="flex justify-between p-2" key={todo.id}>
            <TodoMessage todo={todo} />
            <div className="flex space-x-2">
              <button className="text-white bg-blue-500 p-0.5 rounded">
                <EditIcon onClick={() => openEdit(todo.id)} />
              </button>
              <button className="text-white bg-red-500 p-0.5 rounded">
                <DeleteIcon onClick={() => deleteTodo(todo.id)} />
              </button>
            </div>
          </li>
        )
      )}
      {todoInputOpen === TodoInputType.CREATE && (
        <li className="flex justify-between px-2 pb-4">
          <TodoCreationForm todoInputOpen={todoInputOpen} />
        </li>
      )}
    </ul>
  ) : (
    <div>Loading...</div>
  );
};

export default TodoListMessages;
