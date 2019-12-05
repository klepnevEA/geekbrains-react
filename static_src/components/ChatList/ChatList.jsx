import React, { Component } from 'react'
import './chatlist.css'

export class ChatList extends Component {
    render() {
        return (
            <div className="chat-list">
                <ul className="chat-list__list">
                    <li className="chat-list__elem">
                        <a href="/" className="chat-list__link">Чат 1</a>
                    </li>
                    <li className="chat-list__elem">
                        <a href="/" className="chat-list__link">Чат 2</a>
                    </li>
                    <li className="chat-list__elem">
                        <a href="/" className="chat-list__link">Чат 3</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ChatList
