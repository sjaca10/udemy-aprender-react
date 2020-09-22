import React, { Component } from 'react'

class ComponentA extends Component {
    render() {
        return <p>Component A</p>
    }
}

class ComponentB extends Component {
    render() {
        return <p>Component B</p>
    }
}

export default class ConditionalSection extends Component {
    constructor() {
        super()

        this.state = {
            showA: true
        }
    }

    // Ternary operations make our code more declarative and understandable
    render() {
        return (
            <div>
                <h4>Conditional Rendering</h4>
                { this.state.showA ? <ComponentA /> : <ComponentB /> }
            </div>
        )
    }
}
