import React, { Component } from 'react';

export class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.onChange = this.onChange.bind(this);
        this.submitText = this.submitText.bind(this);
    }

    onChange(e) {this.setState({[e.target.name] : e.target.value})}

    submitText(e) {
        e.preventDefault();
        this.props.addMessage(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <form onSubmit={this.submitText}>
                <input onChange={this.onChange} value={this.state.value} type="text" name="value"/>
                <button type="submit">Ответить</button>
            </form>
        )
    }
}

export default FormInput
