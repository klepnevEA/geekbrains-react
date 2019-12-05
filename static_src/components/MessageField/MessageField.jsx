import React, { Component } from 'react'
import FormInput from '../FormInput/FormInput';
import Messages from '../Messages/Messages';

export class MessageField extends Component {
    render() {
        return (
            <div>
               <FormInput addMessage={this.props.addMessage} addAuthor={this.props.addAuthor} />
               <Messages messagesList={this.props.messagesList} />
            </div>
        )
    }
}

export default MessageField
