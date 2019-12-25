const initialState  = {
    chats: {
      1: {title: 'Чат 1', messageList: [1]},
      2: {title: 'Чат 2', messageList: [2]},
      3: {title: 'Чат 3', messageList: [3]},
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

export default function rootReduser(state = initialState, action) {
    switch(action.type) {
        case 'ADD-CHAT': {
          console.log('ADD-CHAT');
          return {
            chats: {...state.chats, [Object.keys(state.chats).length + 1]: {'title': 'Чат ' +  Object.keys(state.chats).length ,  messageList: [] }},
          }
        }
        case 'ADD-MESSAGE': {
          console.log(action.payload);
          return {
            messages: {...state.messages, [Object.keys(state.messages).length + 1]: {text: action.payload, sender: 'me'}},
            }
        }
        default: 
            return state
    } 
}

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