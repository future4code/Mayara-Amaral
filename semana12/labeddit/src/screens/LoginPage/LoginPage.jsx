import React from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { BaseUrl } from '../../constants/constants';
import useInput from '../../hooks/useInput';
import { Group } from '../SingUpPage/styled';

export function LoginPage() {
    const history = useHistory()

    const [emailValue, setEmail] = useInput()
    const [passwordValue, setPassword] = useInput()

    const fazerLogin = () => {
        const body =  {
            email: emailValue,
            password: passwordValue
        }

        axios.post(`${BaseUrl}login`, body)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            history.push("/")
        })
        .catch(err => console.log(err))
    }

    return (
        <Group>
            <p>LoginPage</p>
            <input type="email" value={emailValue} onChange={setEmail} />
            <input type="password" value={passwordValue} onChange={setPassword} />
            <button onClick={fazerLogin}>Fazer login</button>
        </Group>
    )
}

export default LoginPage;