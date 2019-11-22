import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  HashRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom'


import Greeting from './components/class/Greeting';
import GreetingH from './components/hooks/GreetingH';
import Ref from './components/class/Ref';
import RefH from './components/hooks/RefH';

import ForwardRef from './components/ForwardRef';
import ForwardRefH from './components/hooks/ForwardRefH';

import Context from './components/class/Context';
import ContextH from './components/hooks/ContextH';

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
              <Link to="/greeting/class">Greeting</Link>
            </li>
            <li>
              <Link to="/greeting/hooks">GreetingH</Link>
            </li>
            <li>
              <Link to="/ref/class">ref</Link>
            </li>
            <li>
              <Link to="/ref/hooks">refH</Link>
            </li>
            <li>
              <Link to="/forwardRef/class">forwardRef</Link>
            </li>
            <li>
              <Link to="/forwardRef/hooks">forwardRefH</Link>
            </li>
            <li>
              <Link to="/context/class">context</Link>
            </li>
            <li>
              <Link to="/context/hooks">contextH</Link>
            </li>
          </ul>
        </div>

        <div className="content">
          <Switch>
            <Route path="/greeting/class" children={<Greeting />} />
            <Route path="/greeting/hooks" children={<GreetingH />} />
            <Route path="/ref/class" children={<Ref />} />
            <Route path="/ref/hooks" children={<RefH />} />
            <Route path="/forwardRef/class">
              <ForwardRef />
            </Route>
            <Route path="/forwardRef/hooks">
              <ForwardRefH />
            </Route>
            <Route path="/context/class" >
              <Context />  
            </Route>
            <Route path="/context/hooks" children={ContextH}/>
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
