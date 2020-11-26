import React, { Component } from 'react'

export default class Forms extends Component {
    handleClick = (e) => {
        e.preventDefault()
        const name = this.inputName.value
        const twitter = this.inputTwitter.value
        console.log({name, twitter})
    }

    render() {
        return (
        <div>
            <h4>Formularios</h4>
            <form>
                <p>
                    <label htmlFor='name'> Name: </label>
                    <input
                        id='name'
                        name='userName'
                        placeholder='Introduce tu nombre'
                        ref={inputElement => this.inputName = inputElement} />
                </p>
                <p>
                    <label htmlFor='twitter'>Twitter: </label>
                    <input
                        id='twitter'
                        name='twitterAccount'
                        placeholder='Introduce tu Twitter'
                        ref={inputElement => this.inputTwitter = inputElement} />
                </p>
                <button onClick={this.handleClick}>Enviar</button>
            </form>
        </div>
        )
    }
}
