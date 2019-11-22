import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  HashRouter,
  Link,
} from 'react-router-dom'

import routes from './Router';
import RouterConfig from './RouterConfig';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
      
      <HashRouter>
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/greeting?type=class">Greeting</Link>
            </li>
            <li>
              <Link to="/greeting?type=hooks">GreetingH</Link>
            </li>
            <li>
              <Link to="/ref?type=class">ref</Link>
            </li>
            <li>
              <Link to="/ref?type=hooks">refH</Link>
            </li>
            <li>
              <Link to="/forwardRef?type=class">forwardRef</Link>
            </li>
            <li>
              <Link to="/forwardRef?type=hooks">forwardRefH</Link>
            </li>
            <li>
              <Link to="/context?type=class">context</Link>
            </li>
            <li>
              <Link to="/context?type=hooks">contextH</Link>
            </li>
            <li>
              <Link to="/simple-todo">todo</Link>
            </li>
          </ul>
        </div>

        <div className="content">
          {RouterConfig(routes)}
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
