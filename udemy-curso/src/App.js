import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Component with classic function
// function Hello(props) {
//   return <h2>{props.title}</h2>
// }

// Component with arrow function
// const Hello = (props) => <h2>{props.title}</h2>

// Class component
class Hello extends Component {
  render () {
  return <h2>{this.props.title}</h2>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title = 'Hello from props' />
        <p>To get started, edit <code> src/App.js</code> and save to reload</p>
      </header>
    </div>
  );
}

export default App;
