import React, { Component } from 'react'

export class Message extends Component {
    render() {
        return (
            <li>
                {this.props.text}
            </li>
        )
    }
}

export default Message
