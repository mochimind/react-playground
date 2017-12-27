import React, { Component } from 'react';
import './App.css';

import AlertContainer from 'react-alert';

import InputPanel from './InputPanel';
import OutputPanel from './OutputPanel';

class App extends Component {
  alertOptions = {
    offset: 14,
    position: 'top left',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }

  messageUser = (msg, type) => {
    this.msg.show(msg, { type: type })
  }

  render() {
    return (
      <div className="App">
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        <h1>Blood Sugar Monitor</h1>
        <InputPanel messageUser={this.messageUser}/>
        <OutputPanel messageUser={this.messageUser} />
      </div>
    );
  }
}

export default App;
