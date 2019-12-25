import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'
import './chatlist.css'
import {connect} from 'react-redux'

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
            <li key={keyChat} className="chat-list__elem">
                <NavLink key={keyChat} to={"/chat/" + keyChat + "/"} className="chat-list__link">Чат {keyChat}</NavLink>
            </li>
        ))
        return (
            <div className="chat-list">
                <ul className="chat-list__list">
                    {chatElem}
                </ul>
                <div className="chat-list__add" onClick={() => this.props.addChat()}>
                    <Button variant="contained" color="primary">Добавить чат</Button> 
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        chats: state.chat.chats
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addChat: () => dispatch({
            type: 'ADD-CHAT'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
