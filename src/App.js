import React from 'react';
import logo from './logo.svg';
import './App.css';

import CreateRef from './components/CreatRef';
import RefCallback from './components/RefCallback';
import RefChildren from './components/RefChildren';
import RefString from './components/RefString';
import ForwardRef from './components/FowardRef';
import FormValidation from './components/FormValidation';
import ErrorDemo from './components/ErrorBoundary';
import RadioGroup, { Radio } from './components/RadioGroup';

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

      {/* <CreateRef /> */}
      {/* <RefCallback /> */}
      {/* <RefChildren /> */}
      {/* <RefString /> */}
      {/* <ForwardRef /> */}

      {/* <FormValidation /> */}
      {/* <ErrorDemo /> */}

      <RadioGroup name="g2">
        <Radio value="first" />
        <Radio value="second" />
        <Radio value="third" />
      </RadioGroup>
    </div>
  );
}

export default App;
