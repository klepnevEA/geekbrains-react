import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Layout from '../../Layout';


export default class Router extends React.Component {
   render() {
       return (
           <Switch>
               <Route exact path='/' component={ Layout } />
               <Route path='/chat/1/' render={ () =>
                   <Layout chatId={ 1 } /> } />
               <Route path='/chat/2/' render={ () =>
                   <Layout chatId={ 2 } /> } />
               <Route path='/chat/3/' render={ () =>
                   <Layout chatId={ 3 } /> } />
           </Switch>
       )
   }
}
