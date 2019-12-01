import React, { Component } from 'react';

export class FormInput extends Component {
    state = {
        value: '',
        author: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitText = (e) => {
        e.preventDefault();
        this.props.addMessage(this.state.value, this.state.author);
        this.setState({ value: '' });
    }

    render() {
        return (
            <form onSubmit={this.submitText}>
                <div>
                    Автор
                    <input onChange={this.handleChange} value={this.state.author} type="text" name="author"/>
                </div>
                <div>
                    Сообщение
                    <input onChange={this.handleChange} value={this.state.value} type="text" name="value"/>
                </div>
                <button type="submit">Ответить</button>
            </form>
        )
    }
}

export default FormInput
