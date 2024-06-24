import { useSelector, useDispatch, shallowEqual } from "react-redux";
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
      {todos?.length ? (
        todos.map((todo) => (
          <TodoMessage key={todo.id} todo={todo}></TodoMessage>
        ))
      ) : (
        <div>Loading...</div>
      )}
      <NewTaskButton />
    </div>
  );
};

export default TodoListTasks;
