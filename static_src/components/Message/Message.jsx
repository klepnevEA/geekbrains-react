import React, { Component } from 'react'

export class Message extends Component {
    render() {
        return (
            <li 
                style= { {color: this.props.message.author === 'me' ? 'green' : 'red' } }
            >
                {this.props.message.text}
            </li>
        )
    }
}

export default Message
