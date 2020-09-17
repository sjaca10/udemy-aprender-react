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
    const { // destructuring following alpha-order
      arrayOfNumbers,
      isActivated,
      multiply,
      number,
      objectWithInfo,
      text,
      title,
    } = this.props
    const isTextActivated = isActivated ? 'On' : 'Off'
    const multipliedNumbers = arrayOfNumbers.map(multiply)

    return (
      <div>
        {title}
        <p>{text}</p>
        <p>{number}</p>
        <p>{isTextActivated}</p>
        <p>{multipliedNumbers}</p>
        <p>{multipliedNumbers.join(', ')}</p>
        <p>{objectWithInfo.key1}</p>
        <p>{objectWithInfo.key2}</p>
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
        <Text // props following alpha-order
          arrayOfNumbers={[2, 3, 10]}
          objectWithInfo={{ key1: 'First Value', key2: 'Second Value' }}
          isActivated // true by default when value is not assigned
          multiply={(number) => number * 2}
          number={2}
          text='Texto en string'
          title={<h1>This is the title</h1>} // element as prop
        />
        <p>To get started, edit <code> src/App.js</code> and save to reload</p>
      </header>
    </div>
  );
}

export default App;
