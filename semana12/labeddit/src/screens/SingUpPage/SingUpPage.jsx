import React from 'react'
import { useHistory } from 'react-router-dom';
import { BaseUrl } from '../../constants/constants';
import useInput from '../../hooks/useInput';
import axios from 'axios'
import { Group } from './styled';

export function SingUpPage() {
    const history = useHistory()

    const [emailValue, setEmail] = useInput()
    const [passwordValue, setPassword] = useInput()
    const [userNameValue, setUserName] = useInput()

    const fazerCadastro = () => {
        const body =  {            
            email: emailValue,
            password: passwordValue,
            username: userNameValue
        }

        axios.post(`${BaseUrl}signup`, body)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            history.push("/")
        })
        .catch(err => console.log(err))
    }

    return (
        <Group>
            <p>SignUpPage</p>
            <input type="text" value={userNameValue} onChange={setUserName}/>
            <input type="email" value={emailValue} onChange={setEmail}/>
            <input type="password" value={passwordValue} onChange={setPassword}/>
            <button onClick={fazerCadastro}>Fazer login</button>
        </Group>
    )
}

export default SingUpPage;