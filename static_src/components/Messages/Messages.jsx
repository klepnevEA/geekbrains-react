import React, { Component } from 'react'
import Message from '../Message/Message.jsx'
import './messages.css'
import {connect} from 'react-redux'

export class Messages extends Component {
    componentDidUpdate() {
        const list = document.getElementById( 'messages-list' );
        list.scrollTop = list.scrollHeight;
    }
    
    render() {
        const { messages, chatId, chats } = this.props;

        const messageElements = chats[chatId].messageList.map((messageId, index) => {
            return (
                <Message
                    key={ index }
                    messageId = {messageId}
                    // text={ messages[messageId].text }
                    // sender={ messages[messageId].sender }
                />
                )
            });
 

        return (
            <div className="messages-wrapper">
                <ul id="messages-list" className="messages-list">
                    {messageElements}
                </ul>
            </div>
            
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

export default connect(mapStateToProps, mapDispatchToProps)(Messages)

