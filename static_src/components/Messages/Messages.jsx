import React, { Component } from 'react';
import Message from '../Message/Message.jsx'


export class Messages extends Component {
    
    render() {
        return (
            <ul className="messages-list">
                {this.props.messagesList.map((message, index) => (
                    <Message key={index} message={message} />
                ))}
            </ul>
        )
    }
}

export default Messages
