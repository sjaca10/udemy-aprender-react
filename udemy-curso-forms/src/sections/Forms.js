import React, { Component } from 'react'

export default class Forms extends Component {
    handleClick(e) {
        e.preventDefault()
        const name = document.getElementById('name').value
        const twitter = document.getElementById('twitter').value
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
                        placeholder='Introduce tu nombre' />
                </p>
                <p>
                    <label htmlFor='twitter'>Twitter: </label>
                    <input
                        id='twitter'
                        name='twitterAccount'
                        placeholder='Introduce tu Twitter' />
                </p>
                <button onClick={this.handleClick}>Enviar</button>
            </form>
        </div>
        )
    }
}
