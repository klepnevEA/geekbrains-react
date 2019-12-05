import React, { Component } from 'react'
import FormInput from '../FormInput/FormInput'
import Messages from '../Messages/Messages'
import './messagefield.css'

export class MessageField extends Component {
    render() {
        return (
            <div className="message-field">
                <Messages messagesList={this.props.messagesList} />
                <FormInput addMessage={this.props.addMessage} addAuthor={this.props.addAuthor} />
            </div>
        )
    }
}

export default MessageField
