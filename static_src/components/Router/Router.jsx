import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from '../../Layout'
import {connect} from 'react-redux'


class Router extends React.Component {
   render() {
       const {chats} = this.props;
       const routeElem = Object.keys(chats).map((key) => {
           const keyPatch = '/chat/' + key + '/';
           return (
            <Route path= {keyPatch} key = {key}  render={ () =>
                <Layout chatId={ key } /> } />
           )
        
       })
       return (
           <Switch>
               <Route exact path='/' component={ Layout } />
               {routeElem}
                <Route path='/login/' render={ () =>
                    <Layout login={true} /> } />
           </Switch>
       )
   }
}


function mapStateToProps(state) {
    return {
        chats: state.chat.chats,
        messages: state.chat.messages
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router)