import React, { Component } from 'react';
import './App.css';

import InputPanel from './InputPanel';
import OutputPanel from './OutputPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputPanel />
        <OutputPanel />
      </div>
    );
  }
}

export default App;
