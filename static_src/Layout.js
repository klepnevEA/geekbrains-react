import React, {Component} from 'react';
import PropTypes from "prop-types";
import Header from './components/Header/Header'
import ChatList from  './components/ChatList/ChatList'
import MessageField from  './components/MessageField/MessageField'

class Layout extends Component {

  static propTypes = {
    chatId: PropTypes.number,
  };

  static defaultProps = {
      chatId: 1,
  };

  state = {
    chats: {
      1: {title: 'Чат 1', messageList: [1, 3]},
      2: {title: 'Чат 2', messageList: [2]},
      3: {title: 'Чат 3', messageList: []},
    },

    messages: {
      1: { text: "Привет!", sender: 'bot' },
      2: { text: "Здравствуйте!", sender: 'bot' },
      3: { text: "Здравствуйте!!!!", sender: 'me' },
    },
    input: '',
    flag: false,
    authorName: 'Вася',
    botAnsvers: ['Рад тебя видеть', 'Как дела?', 'Как учеба?', 'Люблю тебя', 'Ненавижу тебя', 'Иди в жопу!!!', 'Хочу от тебя дедей!'] 
  };

  addMessage = (message) => {
    if(message) {
      const { messages, chats, input } = this.state;
      const { chatId } = this.props;
      const sender = 'me';

      const messageId = Object.keys(messages).length + 1;

      this.setState({
        messages: {...messages,
            [messageId]: {text: message, sender: sender}},
        chats: {...chats,
            [chatId]: { ...chats[chatId],
                messageList: [...chats[chatId]['messageList'], messageId]
            }
        },
        flag: true
    })
    }
  }

  botAnsver = () => {
    const { messages, chats, input } = this.state;
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

  addChat = () => {
    const { chats } = this.state;
    const chatsId = Object.keys(chats).length + 1;
    this.setState({
      chats: {...chats, [chatsId]: {'title': 'Чат ' +  chatsId ,  messageList: [] }},
    })
  }

  getRandomFloat = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  componentDidUpdate() {
    if(this.state.flag) {
      setTimeout(() => {
        this.botAnsver()
      }, 1000 )
    }
  }
  
  render() {
    return (
      <div className="wrapper">
        <Header chatId={ this.props.chatId }/>
        <div className="container">
          <ChatList
            addChat={this.addChat}
            chats={this.state.chats}
          />
          <MessageField 
            dellMessage={this.dellMessage}
            chatId={this.props.chatId} 
            addMessage={this.addMessage} 
            addAuthor={this.addAuthor} 
            messagesList={this.state.messages} 
            chats={this.state.chats}
            />  
        </div>
      </div>
    );
  }
}

export default Layout;
