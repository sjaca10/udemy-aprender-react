import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  constructor() {
    super()

    this.state = {
      counter: 1
    }
  }

  render() {
    return <span>Count: {this.state.counter}</span>
  }
}

function App() {
  return (
    <div className="App">
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
