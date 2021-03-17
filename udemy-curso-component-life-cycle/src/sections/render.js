import React, { Component } from 'react'

const HelloRender = (props) => <h1>Hello render!</h1>

class Render extends Component {
    constructor(props) {
        console.log('Render: constructor')
        super(props)
        this.state = { message: 'Initial message' }
    }

    componentWillMount() {
        console.log('Render: componentWillMount')
    }

    // Avoid operations and transformations in render otherwise it will
    // affect the performance of the application. This just should return
    // a rendering object of our data.
    render() {
        console.log('Render: render')
        return [
            <h4 key='0'>Life cycle component: Render</h4>,
            <h1 key='A'>First element</h1>,
            <HelloRender key='B' />,
            <HelloRender key='C' />,
            <h3 key='D'>Fourth element</h3>
        ]
    }
}

export default Render
