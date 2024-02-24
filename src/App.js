import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist'
import Todo from './Todo'

function App() {
  return (
    <div className="App">
    <h1>Welcome to Reactapp</h1>
    <Todolist></Todolist>
    <Todo></Todo>
    </div>
  );
}

export default App;
