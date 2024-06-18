import './App.css';
import TodoList from './components/todoList/todoList';
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from './store/store';
import { useEffect } from 'react';
import { fetchData } from './store/todosSlice';


function App() {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const todos = useSelector((state: RootState) => state.todos);

  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
