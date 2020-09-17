import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import BaseUrl from "../../const-requests/const-requests"
import { useInputValue } from "../../hooks/hooks";
import { goTripsPage } from "../../router/goToPages";

function LoginAdm() {
  const [email, setEmail] = useInputValue()
  const [password, setPassword] = useInputValue();
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      goTripsPage(history)
    }
  }, [history]);

  const handleLogin = () => {
    const body = {
      email: email,
      password: password
    };

    axios
      .post(`${BaseUrl}/login`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goTripsPage(history);
      })
      .catch((err) => {
        alert('Insira um e-mail e uma senha válida')
      });
  };

  return (
    <div>
      <input value={email} onChange={setEmail} placeholder="E-mail" />
      <input value={password} onChange={setPassword} placeholder="Senha" type="password" />
      <button onClick={handleLogin}>Fazer Login</button>
    </div>
  );
}

export default LoginAdm;
