import { useState } from "react";
import NewTaskButton from "../NewTaskButton/NewTaskButton";
import TodoListHeader from "../TodoListHeader/TodoListHeader";
import TodoListMessages from "../TodoListMessages/TodoListMessages";
import { TodoInputType } from "../../types";

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  const [todoInputOpen, setTodoInputOpen] = useState<TodoInputType>(
    TodoInputType.NONE
  );

  return (
    <div className="grid place-items-center h-screen max-sm:m-3">
      <div className="flex flex-col border-2 min-h-[25%] 2xl:w-4/12 xl:w-5/12 lg:w-6/12 md:w-8/12 sm:w-10/12 bg-slate-100">
        <TodoListHeader />
        <div className="flex flex-col flex-1 justify-between px-2 pt-2">
          <TodoListMessages
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
