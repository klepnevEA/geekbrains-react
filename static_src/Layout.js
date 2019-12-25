import React, {Component} from 'react';
import PropTypes from "prop-types";
import Header from './components/Header/Header'
import ChatList from  './components/ChatList/ChatList'
import MessageField from  './components/MessageField/MessageField'
import Login from  './components/Login/Login'
import {connect} from 'react-redux'

class Layout extends Component {

  static propTypes = {
    chatId: PropTypes.number,
  };

  static defaultProps = {
      chatId: 1,
  };

  // addMessage = (message) => {
  //   if(message) {
  //     const { messages, chats, input } = this.state;
  //     const { chatId } = this.props;
  //     const sender = 'me';

  //     const messageId = Object.keys(messages).length + 1;

  //     this.setState({
  //       messages: {...messages,
  //           [messageId]: {text: message, sender: sender}},
  //       chats: {...chats,
  //           [chatId]: { ...chats[chatId],
  //               messageList: [...chats[chatId]['messageList'], messageId]
  //           }
  //       },
  //       flag: true
  //   })
  //   }
  // }

  botAnsver = () => {
    const { messages, chats, input, flag } = this.state;
    const { chatId } = this.props;
    const answer = this.getRandomFloat(1, (this.state.botAnsvers.length))
    const botAnsver = this.state.botAnsvers[answer];

    const messageId = Object.keys(messages).length + 1;

    this.setState({
      messages: {...messages,
          [messageId]: {text: botAnsver, sender: 'bot'}},
      chats: {...chats,
          [chatId]: { ...chats[chatId],
              messageList: [...chats[chatId]['messageList'], messageId]
          }
      },
      flag: false

    })
  }

  getRandomFloat = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  componentDidUpdate() {
    console.log('!!!');
    // if(this.state.flag) {
    //   setTimeout(() => {
    //     this.botAnsver()
    //   }, 1000 )
    // }
  }

  
  
  render() {
    return (
      <div className="wrapper">
        <Header chatId={ this.props.chatId }/>
        <div className="container">

          {this.props.login ?
            <Login /> 
            : 
            [
              <ChatList
                key={1}
              />,
              <MessageField 
                key={2}
                chatId={this.props.chatId} 
                addMessage={this.addMessage} 
                addAuthor={this.addAuthor} 
              /> 
            ] 
           }

        </div> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      chats: state.chat.chats,
      flag: state.chat.flag
  }
}

function mapDispatchToProps(dispatch) {
  return {
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
