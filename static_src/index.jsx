import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Router from './components/Router/Router'
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import rootReduser from './redux/rootReduser.js'
import 'style.css';

const store = createStore(rootReduser);

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
        </ThemeProvider>
    </Provider>
    
    , document.getElementById('root'));

