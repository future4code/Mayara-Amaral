import React from 'react';
import { useHistory } from 'react-router-dom';
import { goTripsPage } from '../../router/goToPages';

function LoginAdm() {
  const history = useHistory()
  
  return (
    <div>
      <form>
        <label>E-mail: </label>
        <input type="email"/>
        <label>Senha: </label>
        <input type="password"/>
        <button  onClick={() => goTripsPage(history)}>Entrar</button>
      </form>
    </div>
  );
}

export default LoginAdm;
