import React, { Component } from 'react'
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <h4>Eventos</h4>
      <button onClick={() => alert('Hi here!')}>Hi there!</button>
    </div>
    );
  }
}

export default App;
