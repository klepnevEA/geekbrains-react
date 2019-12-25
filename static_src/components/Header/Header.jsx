import React, { Component } from 'react'
import PropTypes from "prop-types";
import './header.css'
import { NavLink } from 'react-router-dom';

export class Header extends Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
 
    render() {
        return (
            <div className="header">
                <div className="container header__container">
                    <h1>Чат { this.props.chatId }</h1>
                    <NavLink className="header__login" to="/login/">Логин</NavLink>
                </div>
            </div>
        )
    }
}

export default Header
