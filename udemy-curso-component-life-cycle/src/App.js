import React, { Component } from 'react'
import Constructor from './sections/constructor'
import ComponentWillMount from './sections/componentWillMount'
import Render from './sections/render'
class App extends Component {
  render () {
    return (
      <div className="App">
        <Constructor />
        <ComponentWillMount />
        <Render />
      </div>
    );
  }
}

export default App;
