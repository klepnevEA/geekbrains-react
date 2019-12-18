import React, { Component } from 'react'
import Message from '../Message/Message.jsx'
import './messages.css'

export class Messages extends Component {
    componentDidUpdate() {
        const list = document.getElementById( 'messages-list' );
        list.scrollTop = list.scrollHeight;
    }
    
    render() {
        const { messagesList, chatId, chats } = this.props;

        const messageElements = chats[chatId].messageList.map((messageId, index) => (
            <Message
                key={ index }
                text={ messagesList[messageId].text }
                sender={ messagesList[messageId].sender }
            />));
 

        return (
            <div className="messages-wrapper">
                <ul id="messages-list" className="messages-list">
                    {messageElements}
                </ul>
            </div>
            
        )
    }
}

export default Messages
