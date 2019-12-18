import React, { Component } from 'react'
import PropTypes from "prop-types";
import './header.css'

export class Header extends Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };
    render() {
        return (
            <div className="header">
                <div className="container header__container">
                    <h1>Чат { this.props.chatId }</h1>
                </div>
            </div>
        )
    }
}

export default Header
