import React, { Component } from 'react';
import './App.css';

// React es declarativo y reactivo (en gran medida al state):
// - declaractivo porque se le dice qué se debe renderizar y no cómo debe renderizar
// - reactivo porque reacciona a los cambios de los componentes
class Counter extends Component {
  constructor() {
    super()

    this.state = {
      counter: 1
    }

    // No se debe mutar el estado de un componente directamente porque React
    // optimiza cuando realizar los cambios en el árbol de elementos DOM 
    // a través de una cola priorizada para reflejar los cambios de los componentes.
    // De mutar directamente, React no podría hacer esa optimización
    // Se debe user setState (async method -> no se sabe hasta que punto se hara el cambio del estado)
    // setInterval(() => this.state.counter = this.state.counter + 1)
    setInterval(() => {
      this.setState({ counter: this.state.counter + Math.random() })
    }, 1000)
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
