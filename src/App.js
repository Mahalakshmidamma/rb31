import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store/store'
import Counter from './components/Counter';
import Todolist from './components/Todolist';

function App() {
  return (
     <Provider store={store}>
    <div className='betterview'>
    <h1>Welcome to React-Redux</h1>
    <Counter></Counter>
    <Todolist></Todolist>

    </div>
    </Provider>
  );
}

export default App;
