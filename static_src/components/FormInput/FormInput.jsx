import React, { Component } from 'react'
import { TextField, Fab }  from '@material-ui/core'
import Send from '@material-ui/icons/Send';
import './forminput.css'

export class FormInput extends Component {
	state = {
		value: '',
		author: '',
	};

	textInput = React.createRef();

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	submitText = e => {
		e.preventDefault();
		this.props.addMessage(this.state.value, this.state.author);
		this.setState({ value: '' });
	};

	componentDidMount() {
		this.textInput.current.focus();
	}

	render() {
		return (
			<form className="form-input" onSubmit={this.submitText}>
                <div className="form-input__row">
                    <label className="form-input__label">
                        Автор
                        <TextField onChange={this.handleChange} value={this.state.author} type="text" name="author" />
                    </label>
				</div>
                <div className="form-input__row">
                    <label className="form-input__label">
                        Сообщение
                        <TextField
                            onChange={this.handleChange}
                            value={this.state.value}
                            type="text"
                            name="value"
                            ref={this.textInput}
                        />
                    </label>
                    <div className="form-input__buttons">
                        <Fab color="primary" type="submit"><Send /></Fab>
                    </div>
                </div>
                
			</form>
		);
	}
}

export default FormInput;
