import React, { Component } from 'react'
import { runInThisContext } from 'vm'

export class Message extends Component {
    render() {
        const style = {
            listStyle: 'none',
            border: '1px solid #ccc',
            backgroundColor: '#eee',
            borderRadius: '5px',
            padding: '5px',
            marginBottom: '10px',
            alignSelf: 'flex-start'
        }

        return (
            <li style={style}>
                {this.props.text}
            </li>
        )
    }
}

export default Message
