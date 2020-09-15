import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { goLoginPage, goPublicPage } from '../../router/goToPages';


function InitialPage() {
  const history = useHistory()

  return (
    <div>      
      <button onClick={() => goPublicPage(history)}>Quero viajar</button>
      <button onClick={() => goLoginPage(history)}>Login</button>      
    </div>
  );
}

export default InitialPage;
