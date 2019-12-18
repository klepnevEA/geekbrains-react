import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import Messages from '../Messages/Messages';
import './messagefield.css';

export class MessageField extends Component {
	render() {
		return (
			<div className="message-field">
				<Messages
					chats={this.props.chats}
					messagesList={this.props.messagesList}
					chatId={this.props.chatId}
				/>
				<FormInput addMessage={this.props.addMessage} addAuthor={this.props.addAuthor} />
			</div>
		);
	}
}

export default MessageField;
