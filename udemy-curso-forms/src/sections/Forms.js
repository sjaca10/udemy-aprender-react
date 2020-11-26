import React, { Component } from 'react'

export default class Forms extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const name = this.inputName.value
        const twitter = this.inputTwitter.value
        console.log({name, twitter})
    }

    handleChange = (e) => {
        console.log('handleChange', e.target.checked)
    }

    render() {
        return (
        <div>
            <h4>Formularios</h4>
            <form onSubmit={this.handleSubmit}>
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
                <p>
                    <label htmlFor='termsConditions'>Terms and Conditions</label>
                    <input
                        id='termsConditions'
                        name='termsAndConditions'
                        type='checkbox'
                        onChange={this.handleChange}
                    />
                </p>
                <button>Enviar</button>
            </form>
        </div>
        )
    }
}
