import React, { Component } from 'react';
import './App.css';

import InputPanel from './InputPanel';
import OutputPanel from './OutputPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Blood Sugar Monitor</h1>
        <InputPanel />
        <OutputPanel />
      </div>
    );
  }
}

export default App;
