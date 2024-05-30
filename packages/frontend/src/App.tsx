import './App.css';
import TodoList from './components/todoList/todoList';
import { useSelector } from 'react-redux'
import { RootState } from './store/store';

function App() {

  const todos = useSelector((state: RootState) => state.todos);

  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
