import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './chatlist.css'

export class ChatList extends Component {
    componentDidUpdate() {
        const { chats } = this.props;
        Object.keys(chats).map((keyChat) => {
            console.log(keyChat);
        });
    }

    render() {
        const { chats } = this.props;

        let chatElem = Object.keys(chats).map((keyChat) => (
            <li className="chat-list__elem">
                <NavLink to={"/chat/" + keyChat + "/"} className="chat-list__link">Чат {keyChat}</NavLink>
            </li>
        ))
        return (
            <div className="chat-list">
                <ul className="chat-list__list">
                    {chatElem}
                </ul>
                <div className="chat-list__add" onClick={this.props.addChat}>
                    <Button variant="contained" color="primary">Добавить чат</Button> 
                </div>
            </div>
        )
    }
}

export default ChatList
