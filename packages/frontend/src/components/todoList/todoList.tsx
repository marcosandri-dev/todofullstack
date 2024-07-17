import { useEffect, useRef, useState } from "react";
import NewTaskButton from "../NewTaskButton/NewTaskButton";
import TodoListHeader from "../TodoListHeader/TodoListHeader";
import TodoListMessages from "../TodoListMessages/TodoListMessages";
import { TodoInputType } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchData } from "../../store/todosSlice";

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();
  const hasFetchedData = useRef(false);

  const [todoInputOpen, setTodoInputOpen] = useState<TodoInputType>(
    TodoInputType.NONE
  );

  useEffect(() => {
    if (!hasFetchedData.current) {
      dispatch(fetchData());
      hasFetchedData.current = true;
    }
  }, []);

  return (
    <div className="grid place-items-center h-screen max-sm:m-3 back bg-gradient-to-b from-red-800 to-slate-100">
      <div className="flex flex-col border-2 min-h-[25%] 2xl:w-4/12 xl:w-5/12 lg:w-6/12 md:w-8/12 sm:w-10/12 bg-slate-100">
        <TodoListHeader todoListTitle="Your todo list name" />
        <div className="flex flex-col flex-1 justify-between px-2 pt-2">
          <TodoListMessages
            todos={todos}
            todoInputOpen={todoInputOpen}
            setTodoInputOpen={setTodoInputOpen}
          />
          <div className="flex justify-center -mb-5">
            <NewTaskButton
              todoInputOpen={todoInputOpen}
              setTodoInputOpen={setTodoInputOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
