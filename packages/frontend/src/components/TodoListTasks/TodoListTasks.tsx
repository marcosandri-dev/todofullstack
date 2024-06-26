import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect, useRef } from "react";
import { fetchData } from "../../store/todosSlice";
import TodoMessage from "../TodoTask/todoTask";
import NewTaskButton from "../NewTaskButton/NewTaskButton";

interface TodoListTasksProps {}

const TodoListTasks: React.FC<TodoListTasksProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos);
  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (!hasFetchedData.current && !todos.length) {
      dispatch(fetchData());
      hasFetchedData.current = true;
    }
  }, [dispatch, todos]);

  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {todos?.length ? (
          todos.map((todo) => (
            <li className="flex justify-between gap-x-6 py-5">
              <TodoMessage key={todo.id} todo={todo}></TodoMessage>
            </li>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
      <NewTaskButton />
    </div>
  );
};

export default TodoListTasks;
