import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      mouseX: 0,
      mouseY: 0,
    }

    // Link context to the method, required to avoid TypeError: Cannot read property setState of null
    // Old, ugly, dirty way, better use arrow function
    // this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleClick(e) {
    console.log(e) // Synthetic event from React to provide compatiblity
    console.log(e.nativeEvent) // Browser's native event
    alert('Hi here!')
  }

  // Link context to the method, required to avoid TypeError: Cannot read property setState of null
  // Recommended, cleaner method, through an arrow function
  // handleMouseMove(e) {
  handleMouseMove = (e) => {
    const { clientX, clientY } = e
    this.setState({ mouseX: clientX, mouseY: clientY })
  }

  render() {
    return (
    <div className="App">
      <h4>Eventos</h4>
      {/* Example defining anonymous function to execute */}
      {/* <button onClick={() => alert('Hi here!')}>Hi there!</button> */}
      {/* Example calling a function */}
      <button onClick={this.handleClick}>Hi there!</button>
      <div 
        onMouseMove={this.handleMouseMove}
        style={{ border: '1px solid #000', marginTop: 10, padding: 10 }}>
        <p>
          {this.state.mouseX}, {this.state.mouseY}
        </p>
      </div>
    </div>
    );
  }
}

export default App;
