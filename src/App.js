import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import React from 'react';
import {Link, Outlet } from 'react-router-dom';
import CountryDetails from './CountryDetails';


function App() {
  return (
    <div className="">
      <h1>App Component</h1>
      <Link to="header">Header</Link> 
      &nbsp;&nbsp;&nbsp;
      <Link to="todo">Todo</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="counter">Counter</Link> 
      &nbsp;&nbsp;&nbsp;
      <Link to="countries">Countries</Link>
      <Outlet></Outlet>
      
    </div>
  );
}

export default App;
