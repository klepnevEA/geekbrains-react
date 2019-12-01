import React, { Component } from 'react';
import Message from '../Message/Message.jsx'

export class Messages extends Component {
    render() {
        const list = {
            display: 'flex',
            flexDirection: 'column',
            width: '600px'
        }
        return (
            <ul style={list}>
                {this.props.messages.map((message, index) => (
                    <Message key={index} text={message}/>
                ))}
            </ul>
        )
    }
}

export default Messages
