import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import React from 'react';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
      <Outlet></Outlet>
      {/* <Counter></Counter> */}
    </div>
  );
}

export default App;
