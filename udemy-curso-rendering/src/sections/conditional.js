import React, { Component } from 'react'

class LoginButton extends Component {
    render() {
        return (
            <div>
                <button>Iniciar Sesión</button>
            </div>
        )
    }
}

class LogoutButton extends Component {
    render() {
        return (
            <div>
                <p>Bienvenido, usuario</p>
                <button>Cerrar Sesión</button>
            </div>
        )
    }
}

export default class ConditionalSection extends Component {
    constructor() {
        super()

        this.state = {
            isUserLogged: true
        }
    }

    // Ternary operations make our code more declarative and understandable
    render() {
        return (
            <div>
                <h4>Conditional Rendering</h4>
                { this.state.isUserLogged ? <LogoutButton /> : <LoginButton /> }
            </div>
        )
    }
}
