import React from 'react'
import { useHistory } from 'react-router-dom';
import { BaseUrl } from '../../constants/constants';
import useInput from '../../hooks/useInput';
import axios from 'axios'
import { Group, InputGroup } from './styled';
import { Button, TextField } from '@material-ui/core';
import { ButtonContainer } from './styled';

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
            <InputGroup>
                <TextField  
                    margin='dense' 
                    variant='outlined' 
                    type="text"
                    label={'Nome de usuário'} 
                    value={userNameValue} 
                    onChange={setUserName}
                />
                <TextField
                    margin='dense' 
                    variant='outlined'  
                    type="email" 
                    label={'Email'} 
                    value={emailValue} 
                    onChange={setEmail}
                />
                <TextField
                    margin='dense' 
                    variant='outlined'  
                    type="password" 
                    label={'Senha'}  
                    type="password" 
                    value={passwordValue} 
                    onChange={setPassword}
                />

                <Button variant='contained' color='primary' size='large' onClick={fazerCadastro}>Fazer Cadastro</Button>
            </InputGroup> 
        </Group>
    )
}

export default SingUpPage;