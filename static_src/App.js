import React, {Component} from 'react';
import FormInput from './components/FormInput/FormInput.jsx';
import Messages from './components/Messages/Messages.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    this.addMessage = this.addMessage.bind(this);
}

  addMessage(value) {
    this.setState({messages: 
      [value, ...this.state.messages]});
    console.log(this.state.messages);
  }
  
  render() {
    return (
        <div className="App">
            <FormInput addMessage={this.addMessage}/>
            <Messages messages={this.state.messages}/>
        </div>
    );
  }
}

export default App;
