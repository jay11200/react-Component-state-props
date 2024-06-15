import React from 'react';
import logo from './logo.svg';
import './App.css';
import Increment from './Increment';
import Listview from './Listview';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <nav>
          <NavLink className="nav-link" to="/"> Increment Task </NavLink>
          <NavLink className="nav-link" to="/listview"> ListView </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Increment />} />
          <Route path="/listview" element={<Listview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
