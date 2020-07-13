import React from 'react';
import logo from './vector-key.svg';
import './App.css';
import Addnew from "./app_component/first.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          key.
        </p>
        <p>
          Add new word.
        </p>
      </header>
    </div>
  );
}

export default App;
