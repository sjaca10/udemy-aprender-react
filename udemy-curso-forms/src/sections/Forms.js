import React, { Component } from 'react'

export default class Forms extends Component {
    constructor() {
        super()

        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: true
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = (e) => {
        console.log('handleChange', e.target.checked)
        this.setState({ inputTerms: e.target.checked })
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
                            value={this.state.inputName} 
                            onChange={e => this.setState({ inputName: e.target.value })}
                        />
                    </p>
                    <p>
                        <label htmlFor='twitter'>Twitter: </label>
                        <input
                            id='twitter'
                            name='twitterAccount'
                            placeholder='Introduce tu Twitter'
                            value={this.state.inputTwitter}
                            onChange={e => this.setState({ inputTwitter: e.target.value })}
                        />
                    </p>
                    <p>
                        <label htmlFor='termsConditions'>Terms and Conditions</label>
                        <input
                            id='termsConditions'
                            name='termsAndConditions'
                            type='checkbox'
                            onChange={this.handleChange} 
                            checked={this.state.inputTerms} />
                    </p>
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}
