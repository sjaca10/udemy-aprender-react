import React, { Component } from 'react'

class ComponentWillMount extends Component {
    constructor(props) {
        console.log('ComponentWillMount: constructor')
        super(props)
        this.state = { message: 'Initial message' }
    }

    componentWillMount() {
        console.log('ComponentWillMount: componentWillMount')
        this.setState({ message: 'Modified message' })
    }

    render() {
        console.log('ComponentWillMount: render')
        return (
            <div>
                <h4>Life cycle component: componentWillMount</h4>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default ComponentWillMount
