import React, { Component } from 'react';
import Message from '../Message/Message.jsx'

export class Messages extends Component {
    render() {
        return (
            <ul>
                {this.props.messages.map((message) => (
                    <Message text={message}/>
                ))}
            </ul>
        )
    }
}

export default Messages
