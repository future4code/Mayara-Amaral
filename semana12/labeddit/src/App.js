import React from 'react'
import {ThemeProvider } from '@material-ui/core'
import theme from './assets/theme';
import { Routes } from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components/AppBar/Navigation'
import styled from 'styled-components'

const Space = styled.div `
  height: 10vh;
`

function App() {
  return (  

    <ThemeProvider theme={theme}>
        <BrowserRouter> 
            <Space>
              <Navigation />
            </Space>       
            <Routes />       
        </BrowserRouter>     
    </ThemeProvider>

 
  );
}

export default App;
