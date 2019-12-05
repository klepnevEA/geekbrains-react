import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import { ThemeProvider } from '@material-ui/core/styles';
import 'style.css';


ReactDOM.render(
    <ThemeProvider>
        <Layout />
    </ThemeProvider>   
    , document.getElementById('root'));

