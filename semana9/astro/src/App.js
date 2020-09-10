import React from 'react';
import InitialPage from './components/InitialPage/InitialPage'
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff1744',
    },
    secondary: {
      main: '#bbdefb',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <InitialPage />
    </ThemeProvider>
  );
}

export default App;
