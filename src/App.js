import './App.css';
import { Route, Routes } from 'react-router-dom';
import TodoList from './features/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
