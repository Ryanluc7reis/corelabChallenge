import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html,body{
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.background};  
    font-family: sans-serif; 
  }
  * {
    box-sizing: border-box ; 
 }
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalStyle/>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);


