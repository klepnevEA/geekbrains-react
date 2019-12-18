import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router/Router'
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import 'style.css';


ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider>
            <Router />
        </ThemeProvider>   
    </BrowserRouter>
    , document.getElementById('root'));

