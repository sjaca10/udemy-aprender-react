import React, { Component } from 'react'
import './App.css';

class App extends Component {
  handleClick(e) {
    console.log(e) // Evento sintetico del React para proveer compatibildiad
    console.log(e.nativeEvent) // Evento nativo del navegador
    alert('Hi here!')
  }

  render() {
    return (
    <div className="App">
      <h4>Eventos</h4>
      {/* Example defining anonymous function to execute */}
      {/* <button onClick={() => alert('Hi here!')}>Hi there!</button> */}
      {/* Example calling a function */}
      <button onClick={this.handleClick}>Hi there!</button>
    </div>
    );
  }
}

export default App;
