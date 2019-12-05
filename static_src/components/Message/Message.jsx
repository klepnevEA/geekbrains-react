import React, { Component } from 'react'
import './message.css'

export class Message extends Component {
    state = {
        classes: [
            'message'
        ]
    }

    componentDidMount() {
        if(this.props.message.author === 'me') {
            this.setState({
                classes: [...this.state.classes, 'message--me' ]
            })
        } else {
            this.setState({
                classes: [...this.state.classes, 'message--bot' ]
            })
        }
    }
    render() {
        
        return (
            <li 
                className={this.state.classes.join(' ')}
            >
                {this.props.message.text}
            </li>
        )
    }
}

export default Message
