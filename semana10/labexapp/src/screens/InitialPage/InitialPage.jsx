import React from 'react';
import { useHistory } from 'react-router-dom';
import InitialHeader from '../../components/Header/InitialHeader';
import { goLoginPage, goPublicPage } from '../../router/goToPages';


function InitialPage() {
  const history = useHistory()

  return (
    <div> 
      <InitialHeader />    
      <button onClick={() => goPublicPage(history)}>Quero viajar</button>
      <button onClick={() => goLoginPage(history)}>Login</button>      
    </div>
  );
}

export default InitialPage;
