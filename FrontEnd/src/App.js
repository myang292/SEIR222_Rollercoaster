import './styles/App.css';
import React, {useState} from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Parks from './pages/Parks';
import About from './pages/About'
import Search from './components/Search'





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
