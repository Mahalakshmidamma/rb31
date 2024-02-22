import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import React from 'react';
import Todolist from './todolist';
import Todo from "./todo"

function App() {
 var [x,setX]= React.useState(100)
 function Head (){
  setX(x+100)
 }
  return (
    <div className="App">
    <h1>Welcome to Reactapp:{x}</h1>
    <button onClick={()=>{Head()}}>Head</button>
    <Counter></Counter>
    <Todolist></Todolist>
    <Todo></Todo>
    </div>
  );
}

export default App;
