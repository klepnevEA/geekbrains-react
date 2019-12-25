import React, { Component } from 'react'
import { TextField, Fab }  from '@material-ui/core'
import Send from '@material-ui/icons/Send'
import './forminput.css'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export class FormInput extends Component {
	state = {
		value: ''
	};

	textInput = React.createRef();

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	submitText = message => {
		event.preventDefault();
		this.props.addMessage(message);
		this.setState({ value: '' });
	};

	componentDidMount() {
		this.textInput.current.focus();
	}

	render() {
		return (
			<form className="form-input" onSubmit={() => this.submitText(this.state.value)}>
                <div className="form-input__row">
                    <label className="form-input__label">
                        {this.props.name}
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

FormInput.propTypes = {
    name: PropTypes.string
};

FormInput.defaultProps = {
    name: 'Инпут'
};

function mapStateToProps(state) {
    return {
        chats: state.chat.chats,
        messages: state.chat.messages
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addMessage: (message) => dispatch({
			type: 'ADD-MESSAGE',
			payload: message
		})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormInput)