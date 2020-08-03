import React from 'react';
import logo from './bookapp3.png';
import './App.css';
import Button from './app_component/Button';
import AddNew from './app_component/AddNew';
import Form from './app_component/newword.component.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        </p>
        <img src={logo} className="App-logo" alt="logo">
        </img>
        <p>
        </p>
        <AddNew/>
        <Form/>
        <button className="addit" onclick="handleclick()">
        </button>
        <p>
        </p>
      </header>
    </div>
  );
}

export default App;
