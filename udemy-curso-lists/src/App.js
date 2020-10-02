import React, { Component } from 'react';
import './App.css';
import cars from './data/cars.json'

class CarItem extends Component {
  render() {
    const { car } = this.props

    return (
      // <li key={car.id}> Here the key doesn't make sense, it should be used where the loop statement exists
      <li key={car.id}>
        <p><strong>Id: </strong>{car.id}</p>
        <p><strong>Nombre: </strong>{car.name}</p>
        <p><strong>Marca: </strong>{car.company}</p>
      </li>
    )
  }
}

class App extends Component {
  render() {
    const numbers = [1, 1, 3, 4, 5]
    
    return (
      <div>
        <h4>Trabajando con listas de números</h4>
        {numbers.map((n, i) => {
          return <p key={i}>Soy el número {n}</p>
        })}
        <h4>Trabajando con listas de objetos</h4>
        <ul>
          {cars.map(car => {
            // return (
            //   <li key={car.id}>
            //     <p><strong>Nombre: </strong>{car.name}</p>
            //     <p><strong>Marca: </strong>{car.company}</p>
            //   </li>
            // )
            // Even if I pass the key as prop, it's not accesible in the component
            // It's purpose is for internal React stuff, we can't use in our code
            return <CarItem key={car.id} car={car} />
          })}
        </ul>
      </div>
    )
  }
}

export default App;
