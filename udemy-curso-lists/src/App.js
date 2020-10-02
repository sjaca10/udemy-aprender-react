import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const numbers = [1, 1, 3, 4, 5]
    
    return (
      <div className="App">
        <h4>Trabajando con listas</h4>
        {numbers.map((n, i) => {
          return <p key={i}>Soy el número {n}</p>
        })}
      </div>
    )
  }
}

export default App;
