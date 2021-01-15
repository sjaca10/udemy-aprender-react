import React, { Component } from 'react'

class App extends Component {
  // Default constructor
  // constructor (...args) {
  //   super(...args)
  // }

  constructor (props) {
    console.log('constructor');
    super(props); // This method calls Component construct method

    // Initialize the component state
    this.state = {
      initialMessage: 'Initial message'
    }

    // Bind context to method, old approach, better use arrow functions
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ initialMessage: 'Changed message '})
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        <h4>Ciclo de montaje: constructor</h4>
        {this.state.initialMessage}
        <button onClick={this.handleClick}>
          Change message
        </button>
      </div>
    )
  }
}

export default App
