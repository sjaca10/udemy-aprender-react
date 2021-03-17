import React, { Component } from 'react'
import Constructor from './sections/constructor'
import ComponentWillMount from './sections/componentWillMount'
class App extends Component {
  render () {
    return (
      <div className="App">
        <Constructor />
        <ComponentWillMount />
      </div>
    );
  }
}

export default App;
