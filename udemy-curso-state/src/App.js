import React, { Component } from 'react';
import './App.css';

// React es declarativo y reactivo (en gran medida al state):
// - declaractivo porque se le dice qué se debe renderizar y no cómo debe renderizar
// - reactivo porque reacciona a los cambios de los componentes
class Counter extends Component {
  // Requerido recibir y pasar las props al constructor padre (super) para poder
  // usarlas dentro del custom construct
  constructor(props) {
    super(props)

    this.state = {
      counter: this.props.initialCounter
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
    // El flujo de datos en React es unidireccional de componentes padres
    // a componentes hijos.
    return <NumberCounter counter={this.state.counter} />
  }
}

Counter.defaultProps = {
  initialCounter: 0
}

class NumberCounter extends Component {
  render() {
    console.log('NumberCounter')
    return <span>Count: {this.props.counter}</span>
  }
} 

function App() {
  return (
    <div className="App">
      <div>
        <Counter initialCounter={Math.random() * 1000} />
      </div>
    </div>
  );
}

export default App;
