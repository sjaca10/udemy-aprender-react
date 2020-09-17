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

class Text extends Component {
  render () {
    const text = this.props.isActivated ? 'On' : 'Off'
    const multipliedNumbers = this.props.arrayOfNumbers.map(n => n * 2)

    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{text}</p>
        <p>{multipliedNumbers}</p>
        <p>{multipliedNumbers.join(', ')}</p>
        <p>{this.props.objectWithInfo.key1}</p>
        <p>{this.props.objectWithInfo.key2}</p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Hello from props'/>
        <Text 
          arrayOfNumbers={[2, 3, 10]}
          objectWithInfo={{ key1: 'First Value', key2: 'Second Value' }}
          isActivated // true by default when value is not assigned
          number={2}
          text='Texto en string'
        />
        <p>To get started, edit <code> src/App.js</code> and save to reload</p>
      </header>
    </div>
  );
}

export default App;
