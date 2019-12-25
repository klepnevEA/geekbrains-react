import React, { Component } from 'react'
import './message.css'
import {connect} from 'react-redux'
export class Message extends Component {
    state = {
        classes: [
            'message'
        ]
    }

    componentDidMount() {
        const { messages, chatId, chats, messageId } = this.props;
        if(messages[messageId].sender === 'me') {
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
        const { messages, chatId, messageId } = this.props;
        return (
            <li
                className={this.state.classes.join(' ')}
            >
                {/*{messages[messageId].text}*/}
                <a href="#" 
                    className="message__dell">
                </a>
            </li>
        )
    }
}

function mapStateToProps(state) {
    return {
        chats: state.chat.chats,
        messages: state.chat.messages
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)
