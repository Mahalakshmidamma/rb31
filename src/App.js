import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import React from 'react';
import Todolist from './todolist';
function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
    
  );
}

export default App;
