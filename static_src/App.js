import React, {Component} from 'react';
import FormInput from './components/FormInput/FormInput';
import Messages from './components/Messages/Messages';

class App extends Component {
  state = {
    messages: [],
    author: false,
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
        [value , ...this.state.messages],
        author: true
      });
    }
    
  }

  botAnsver = () => {
    const answer = this.getRandomFloat(1, (this.state.botAnsvers.length))
    const botAnsver = this.state.botAnsvers[answer] 
    this.setState({
      messages: [`Бот: Привет, ${this.state.authorName}! ${botAnsver}`, ...this.state.messages ],
      author: false
    })
  }

  getRandomFloat = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  componentDidUpdate() {
    if(this.state.author) {
      setTimeout(() => {
        this.botAnsver()
      }, 1000 )
    }
  }
  
  render() {
    return (
        <div className="App">
            <FormInput addMessage={this.addMessage} addAuthor={this.addAuthor}/>
            <Messages messages={this.state.messages}/>
        </div>
    );
  }
}

export default App;
