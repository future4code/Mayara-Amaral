import React from 'react';
import { useHistory } from 'react-router-dom';
import InitialHeader from '../../components/Header/InitialHeader';
import { goLoginPage, goPublicPage } from '../../router/goToPages';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {ButtonsDiv, Div, Img} from '../../styled/styled'

function InitialPage() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#21333b',
      },
      secondary: {
        main: '#21333B',
      },
    },
  });

  const history = useHistory()

  return (
    <ThemeProvider theme={theme}>
      <Div>
        <InitialHeader />
      </Div> 
      <ButtonsDiv>        
          <Button variant='contained' color='primary' size='large' onClick={() => goPublicPage(history)}>Quero viajar</Button>
          <br/>        
          <Button variant='contained' color='primary' size='large' onClick={() => goLoginPage(history)}>Login</Button>
      </ButtonsDiv>    
    </ThemeProvider>
  );
}

export default InitialPage;
