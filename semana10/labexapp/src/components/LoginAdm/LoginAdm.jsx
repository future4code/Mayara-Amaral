import React from 'react';
import { useHistory } from 'react-router-dom';
import { login, useInputValue } from '../../hooks/hooks';
import { goTripsPage } from '../../router/goToPages';

function LoginAdm() {
  const history = useHistory()

  const [email, setEmail] = useInputValue()
  const [password, setPassword] = useInputValue()
  
  return (
    <div>
      <form>
        <label>E-mail: </label>
        <input type="email" value={email} onChange={setEmail}/>
        <label>Senha: </label>
        <input type="password" value={password} onChange={setPassword}/>
        <button  onClick={() => goTripsPage(history)}>Entrar</button>
      </form>
    </div>
  );
}

export default LoginAdm;
