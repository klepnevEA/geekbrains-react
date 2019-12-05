import React, {Component} from 'react';
import Header from './components/Header/Header'
import ChatList from  './components/ChatList/ChatList'
import MessageField from  './components/MessageField/MessageField'

class Layout extends Component {
  state = {
    messages: [],
    flag: false,
    authorName: '',
    botAnsvers: ['Рад тебя видеть', 'Как дела?', 'Как учеба?', 'Люблю тебя', 'Ненавижу тебя', 'Иди в жопу!!!', 'Хочу от тебя дедей!'] 
  };

  addMessage = (value, authorName) => {
    if(!(this.state.authorName === authorName) && value) {
      this.setState({
        authorName: authorName
      });
    }
    if(value) {
      this.setState({
        messages: 
        [ ...this.state.messages, {text: value, author: 'me'} ],
        flag: true
      });
    }
  }

  botAnsver = () => {
    const answer = this.getRandomFloat(1, (this.state.botAnsvers.length))
    const botAnsver = this.state.botAnsvers[answer] 
    this.setState({
      messages: [ ...this.state.messages, { text: `Привет, ${this.state.authorName}! ${botAnsver}`, author: 'bot'} ],
      flag: false
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
        <Header />
        <div className="container">
          <ChatList />
          <MessageField addMessage={this.addMessage} addAuthor={this.addAuthor} messagesList={this.state.messages}/>  
        </div>
      </div>
    );
  }
}

export default Layout;
